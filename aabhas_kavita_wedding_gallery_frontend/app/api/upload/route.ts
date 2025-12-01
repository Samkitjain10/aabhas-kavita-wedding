import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { uploadToR2, isR2Configured } from '@/lib/r2'

// Increase max duration for large file uploads
export const maxDuration = 300 // 5 minutes

export async function POST(request: NextRequest) {
  try {
    console.log('Upload request received')
    const session = await getSession()
    
    if (!session) {
      console.log('No session found')
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    console.log('Session found, userId:', session.userId)

    // Check storage configuration: R2 only (no local storage)
    const r2Configured = isR2Configured()

    // Parse FormData - Next.js should handle this automatically
    let formData: FormData
    try {
      formData = await request.formData()
    } catch (formDataError) {
      console.error('FormData parsing error:', formDataError)
      return NextResponse.json(
        { 
          message: 'Failed to parse request body as FormData',
          error: formDataError instanceof Error ? formDataError.message : 'Unknown error',
          hint: 'File may be too large. Try compressing the file or check Next.js body size limits.'
        },
        { status: 400 }
      )
    }
    const file = formData.get('file') as File
    const functionsJson = formData.get('functions') as string
    const type = formData.get('type') as string
    const originalSizeParam = formData.get('originalSize')
    const originalSize = originalSizeParam 
      ? parseInt(String(originalSizeParam)) 
      : (file?.size || 0)
    
    console.log('Form data received:', {
      hasFile: !!file,
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
      functionsJson,
      type,
      originalSize
    })

    if (!file || !functionsJson || !type) {
      return NextResponse.json(
        { message: 'Missing required fields', received: { hasFile: !!file, hasFunctions: !!functionsJson, hasType: !!type } },
        { status: 400 }
      )
    }

    if (!file.size || file.size === 0) {
      return NextResponse.json(
        { message: 'File is empty or invalid' },
        { status: 400 }
      )
    }

    let functionIds: number[]
    try {
      functionIds = JSON.parse(functionsJson) as number[]
    } catch (parseError) {
      return NextResponse.json(
        { message: 'Invalid functions format', error: parseError instanceof Error ? parseError.message : 'Parse error' },
        { status: 400 }
      )
    }

    if (!Array.isArray(functionIds)) {
      return NextResponse.json(
        { message: 'Invalid functions: must be an array' },
        { status: 400 }
      )
    }

    // If no function is selected, use "Other" function
    if (functionIds.length === 0) {
      // Find or create "Other" function
      let otherFunction = await prisma.function.findUnique({
        where: { name: 'Other' },
      })
      
      if (!otherFunction) {
        otherFunction = await prisma.function.create({
          data: {
            name: 'Other',
          },
        })
      }
      
      functionIds = [otherFunction.id]
    }

    // Require R2 - no local storage fallback
    if (!r2Configured) {
      return NextResponse.json(
        { 
          message: 'R2 storage is not configured. Please configure Cloudflare R2 in your environment variables.',
          error: 'R2_NOT_CONFIGURED'
        },
        { status: 500 }
      )
    }

    let fileUrl: string
    try {
      console.log('Uploading to Cloudflare R2...')
      fileUrl = await uploadToR2(file, file.name)
      console.log('R2 upload successful:', fileUrl)
    } catch (r2Error) {
      console.error('R2 upload error:', r2Error)
      return NextResponse.json(
        { 
          message: 'Failed to upload file to R2 storage',
          error: r2Error instanceof Error ? r2Error.message : 'Unknown R2 error',
          hint: 'Please check your R2 credentials and bucket configuration.'
        },
        { status: 500 }
      )
    }

    const isImage = type === 'photo'
    const isCompressed = originalSize > 0 && originalSize > file.size

    // Ensure userId is a number
    const userId = typeof session.userId === 'number' ? session.userId : parseInt(String(session.userId))
    
    if (isNaN(userId)) {
      return NextResponse.json(
        { message: 'Invalid user session' },
        { status: 401 }
      )
    }

    // Save media records for each selected function
    let mediaRecords
    try {
      mediaRecords = await Promise.all(
        functionIds.map(async (functionId) => {
          // Verify function exists
          const functionExists = await prisma.function.findUnique({
            where: { id: functionId },
          })
          
          if (!functionExists) {
            throw new Error(`Function with id ${functionId} does not exist`)
          }
          
          return await prisma.media.create({
            data: {
              functionId,
              type: type as 'photo' | 'video',
              url: fileUrl, // R2 URL
              originalUrl: isCompressed && isImage ? undefined : fileUrl,
              fileName: file.name,
              fileSize: file.size, // Actual uploaded file size
              uploadedBy: userId,
            },
          })
        })
      )
    } catch (dbError) {
      console.error('Database error:', dbError)
      const dbErrorMessage = dbError instanceof Error ? dbError.message : 'Database error'
      console.error('Database error details:', {
        message: dbErrorMessage,
        stack: dbError instanceof Error ? dbError.stack : undefined,
        functionIds,
        userId,
        fileUrl
      })
      return NextResponse.json(
        { 
          message: 'Failed to save media to database',
          error: dbErrorMessage
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      media: mediaRecords,
    })
  } catch (error) {
    console.error('Upload error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    
    // Log full error details for debugging
    console.error('Full error details:', {
      message: errorMessage,
      stack: errorStack,
      name: error instanceof Error ? error.name : 'Unknown',
    })
    
    return NextResponse.json(
      { 
        message: 'Upload failed',
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    )
  }
}

