"use server"

import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { ArrowLeft, Camera } from 'lucide-react'
import { FunctionPageClient } from '@/components/function-page-client'
import { PhotosGrid } from '@/components/photos-grid'

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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] shadow-lg flex items-center justify-center">
              <Camera className="h-12 w-12 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">Wedding Gallery</p>
              <h1 className="text-5xl font-bold text-gray-900">Photos</h1>
              <p className="text-gray-600">All captured stills from {functionData.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-semibold text-gray-900">{photos.length}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">Photos</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">{videosCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">Videos</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">{totalCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">Uploads</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/60 mb-8"></div>

        <div className="mb-12 md:mb-0">
          <PhotosGrid 
            functionId={functionId}
            photos={photos.map(p => ({
              id: p.id,
              url: p.url,
              originalUrl: p.originalUrl || undefined,
              fileName: p.fileName,
            }))} 
          />
        </div>
      </div>

      <FunctionPageClient functions={allFunctions} />
    </div>
  )
}

