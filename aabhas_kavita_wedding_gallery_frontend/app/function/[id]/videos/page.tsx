"use server"

import Link from 'next/link'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { ArrowLeft, Play } from 'lucide-react'
import { FunctionPageClient } from '@/components/function-page-client'
import { VideoThumbnail } from '@/components/video-thumbnail'

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

  const videos = functionData.media.filter((m) => m.type === 'video')
  const photosCount = functionData.media.filter((m) => m.type === 'photo').length
  const totalCount = functionData.media.length

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[url('/Aabhas and Kavita wedding logo.png')] bg-center bg-no-repeat bg-fixed opacity-5"></div>
      <div className="absolute inset-0 gradient-wedding"></div>

      <div className="relative z-10 container mx-auto px-4 py-10">
        <Link
          href={`/function/${functionId}`}
          className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] font-medium mb-6 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm tracking-wide uppercase">Back to {functionData.name}</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E8C5B8] to-[#D4A5A5] shadow-lg flex items-center justify-center">
              <Play className="h-12 w-12 text-white" strokeWidth={1.5} fill="white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Wedding Gallery</p>
              <h1 className="text-5xl font-bold text-gray-900">Videos</h1>
              <p className="text-gray-600">Highlights from {functionData.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-semibold text-gray-900">{photosCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">Photos</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">{videos.length}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">Videos</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">{totalCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">Uploads</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/60 mb-8"></div>

        {videos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No videos uploaded yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
            {videos.map((video, index) => (
              <Link
                key={video.id}
                href={`/gallery?media=${video.id}`}
                className="aspect-square overflow-hidden rounded-lg relative group bg-black/10"
              >
                {video.thumbnailUrl ? (
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.fileName}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={index < 6 ? "eager" : "lazy"}
                    unoptimized
                  />
                ) : (
                  <VideoThumbnail
                    videoUrl={video.url}
                    alt={video.fileName}
                    className="w-full h-full"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 rounded-full p-3 shadow-lg">
                    <Play className="h-6 w-6 text-gray-900" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <FunctionPageClient functions={allFunctions} />
    </div>
  )
}

