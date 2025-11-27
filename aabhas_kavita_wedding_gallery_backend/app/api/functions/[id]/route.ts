import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession()
    
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const functionId = parseInt(id)
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const skip = (page - 1) * limit

    if (isNaN(functionId)) {
      return NextResponse.json(
        { message: 'Invalid function ID' },
        { status: 400 }
      )
    }

    const functionData = await prisma.function.findUnique({
      where: { id: functionId },
      include: {
        media: {
          orderBy: { createdAt: 'desc' },
          skip,
          take: limit,
        },
      },
    })

    if (!functionData) {
      return NextResponse.json(
        { message: 'Function not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(functionData)
  } catch (error) {
    console.error('Error fetching function:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

