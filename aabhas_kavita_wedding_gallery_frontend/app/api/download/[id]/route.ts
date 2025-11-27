import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

/**
 * Proxy route to download media files from R2
 * This bypasses CORS issues by fetching server-side
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const mediaId = parseInt(id)

    if (isNaN(mediaId)) {
      return NextResponse.json(
        { message: 'Invalid media ID' },
        { status: 400 }
      )
    }

    // Fetch media from database
    const media = await prisma.media.findUnique({
      where: { id: mediaId },
    })

    if (!media) {
      return NextResponse.json(
        { message: 'Media not found' },
        { status: 404 }
      )
    }

    // Use originalUrl if available, otherwise use url
    const fileUrl = media.originalUrl || media.url

    if (!fileUrl) {
      return NextResponse.json(
        { message: 'File URL not found' },
        { status: 404 }
      )
    }

    // Fetch file from R2 (server-side, no CORS issues)
    const response = await fetch(fileUrl, {
      headers: {
        'User-Agent': 'Wedding-Gallery-Server/1.0',
      },
    })

    if (!response.ok) {
      console.error('Failed to fetch from R2:', response.status, response.statusText)
      return NextResponse.json(
        { message: 'Failed to fetch file from storage' },
        { status: response.status }
      )
    }

    // Get file content
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Determine content type
    let contentType = 'application/octet-stream'
    const fileName = media.fileName || `media-${media.id}`
    const ext = fileName.split('.').pop()?.toLowerCase()

    if (ext === 'jpg' || ext === 'jpeg') contentType = 'image/jpeg'
    else if (ext === 'png') contentType = 'image/png'
    else if (ext === 'gif') contentType = 'image/gif'
    else if (ext === 'webp') contentType = 'image/webp'
    else if (ext === 'mp4') contentType = 'video/mp4'
    else if (ext === 'mov') contentType = 'video/quicktime'
    else if (ext === 'webm') contentType = 'video/webm'
    else if (response.headers.get('content-type')) {
      contentType = response.headers.get('content-type') || 'application/octet-stream'
    }

    // Generate download filename
    let downloadFileName = fileName
    if (!downloadFileName || downloadFileName === 'blob' || !downloadFileName.includes('.')) {
      const extension = ext || (media.type === 'video' ? 'mp4' : 'jpg')
      downloadFileName = `${media.type}-${media.id}.${extension}`
    }

    // Return file with proper headers
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${downloadFileName}"`,
        'Content-Length': buffer.length.toString(),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      {
        message: 'Download failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

