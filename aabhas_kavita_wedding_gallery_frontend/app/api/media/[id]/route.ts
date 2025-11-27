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
    const mediaId = parseInt(id)

    if (isNaN(mediaId)) {
      return NextResponse.json(
        { message: 'Invalid media ID' },
        { status: 400 }
      )
    }

    // Get the specific media
    const media = await prisma.media.findUnique({
      where: { id: mediaId },
      include: {
        function: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!media) {
      return NextResponse.json(
        { message: 'Media not found' },
        { status: 404 }
      )
    }

    // Get all media from the same function for navigation
    const allMedia = await prisma.media.findMany({
      where: {
        functionId: media.functionId,
      },
      include: {
        function: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({
      media,
      allMedia,
    })
  } catch (error) {
    console.error('Error fetching media:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

