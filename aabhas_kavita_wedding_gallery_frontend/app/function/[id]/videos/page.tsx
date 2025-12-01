"use server"

import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { FunctionPageClient } from '@/components/function-page-client'
import { VideoGridItem } from '@/components/video-grid-item'
import { VideosPageHeader } from '@/components/videos-page-header'
import { VideosEmptyState } from '@/components/videos-empty-state'

export default async function FunctionVideosPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const session = await getSession()
  if (!session) redirect('/login')

  const { id } = await params
  const functionId = parseInt(id)
  if (isNaN(functionId)) redirect('/')

  const [functionData, allFunctions] = await Promise.all([
    prisma.function.findUnique({
      where: { id: functionId },
      include: {
        media: {
          orderBy: { createdAt: 'desc' },
        },
      },
    }),
    prisma.function.findMany({
      orderBy: { createdAt: 'asc' },
      select: { id: true, name: true },
    }),
  ])

  if (!functionData) redirect('/')

  // Filter and sort videos by createdAt descending (newest first)
  const videos = functionData.media
    .filter((m) => m.type === 'video')
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  const photosCount = functionData.media.filter((m) => m.type === 'photo').length
  const totalCount = functionData.media.length

  return (
    <div className="min-h-[100dvh] relative">
      <div className="fixed inset-0 pointer-events-none bg-[url('/Aabhas and Kavita wedding logo.png')] bg-center bg-no-repeat bg-fixed opacity-5"></div>
      <div className="fixed inset-0 gradient-wedding pointer-events-none"></div>

      <VideosPageHeader
        functionId={functionId}
        functionName={functionData.name}
        photosCount={photosCount}
        videosCount={videos.length}
        totalCount={totalCount}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="h-px bg-white/60 mb-8"></div>

        {videos.length === 0 ? (
          <VideosEmptyState />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
            {videos.map((video, index) => (
              <VideoGridItem
                key={video.id}
                href={`/gallery?media=${video.id}`}
                alt={video.fileName}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.url}
                index={index}
              />
            ))}
          </div>
        )}
      </div>

      <FunctionPageClient functions={allFunctions} />
    </div>
  )
}

