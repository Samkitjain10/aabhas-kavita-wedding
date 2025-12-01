"use server"

import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { FunctionPageClient } from '@/components/function-page-client'
import { PhotosPageClient } from '@/components/photos-page-client'
import { PhotosPageHeader } from '@/components/photos-page-header'

export default async function FunctionPhotosPage({
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

  const photos = functionData.media.filter((m) => m.type === 'photo')
  const videosCount = functionData.media.filter((m) => m.type === 'video').length
  const totalCount = functionData.media.length

  return (
    <div className="min-h-[100dvh] relative">
      <div className="fixed inset-0 pointer-events-none bg-[url('/Aabhas and Kavita wedding logo.png')] bg-center bg-no-repeat bg-fixed opacity-5"></div>
      <div className="fixed inset-0 gradient-wedding pointer-events-none"></div>

      <PhotosPageHeader
        functionId={functionId}
        functionName={functionData.name}
        photosCount={photos.length}
        videosCount={videosCount}
        totalCount={totalCount}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="h-px bg-white/60 mb-8"></div>

        <PhotosPageClient 
          functionId={functionId}
          photos={photos.map(p => ({
            id: p.id,
            url: p.url,
            originalUrl: p.originalUrl || undefined,
            fileName: p.fileName,
          }))}
        />
      </div>

      <FunctionPageClient functions={allFunctions} />
    </div>
  )
}

