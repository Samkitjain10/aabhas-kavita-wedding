import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { FunctionPageClient } from '@/components/function-page-client'
import { Folder, Camera, Video, ArrowLeft } from 'lucide-react'

export default async function FunctionPage({
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
          select: { type: true },
        },
      },
    }),
    prisma.function.findMany({
      orderBy: { createdAt: 'asc' },
      select: { id: true, name: true },
    }),
  ])

  if (!functionData) redirect('/')

  const photoCount = functionData.media.filter((m) => m.type === 'photo').length
  const videoCount = functionData.media.filter((m) => m.type === 'video').length

  const folderCards = [
    {
      title: 'Photos',
      description: 'All captured moments from this celebration.',
      href: `/function/${functionId}/photos`,
      icon: <Camera className="h-8 w-8" />,
      count: photoCount,
      gradient: 'from-[#D4AF37] to-[#B8941F]',
    },
    {
      title: 'Videos',
      description: 'Watch the highlights and heartfelt clips.',
      href: `/function/${functionId}/videos`,
      icon: <Video className="h-8 w-8" />,
      count: videoCount,
      gradient: 'from-[#E8C5B8] to-[#D4A5A5]',
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/Aabhas and Kavita wedding logo.png")',
          backgroundSize: '50% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: '0.08',
          zIndex: 0,
        }}
      ></div>

      <div className="absolute inset-0 gradient-wedding"></div>

      <div className="relative z-10 container mx-auto px-4 pt-6 pb-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] font-medium mb-6 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
              Back to Home
            </span>
          </Link>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 pb-4"
            style={{
              fontFamily: 'var(--font-playfair)',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 50%, #D4A5A5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {functionData.name}
          </h1>
          {functionData.description && (
            <p
              className="text-xl text-gray-700 max-w-3xl"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {functionData.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {folderCards.map((folder, index) => (
            <Link key={folder.title} href={folder.href} className={`group ${folder.title === 'Videos' ? 'mb-12 md:mb-0' : ''}`}>
              <div
                className="rounded-3xl p-8 h-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-300 group-hover:-translate-y-2"
              >
                {/* Line 1: Icon, Heading, Count */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${folder.gradient} text-white flex items-center justify-center flex-shrink-0`}
                  >
                    {folder.icon}
                  </div>
                  <div className="flex items-baseline gap-3 flex-1">
                    <h2
                      className="text-3xl font-semibold"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {folder.title}
                    </h2>
                    <span className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {folder.count} items
                    </span>
                  </div>
                </div>
                
                {/* Line 2: Description */}
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {folder.description}
                </p>
                
                {/* Line 3: View Photos */}
                <div className="inline-flex items-center gap-2 text-[#D4AF37] font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  View {folder.title}
                  <Folder className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <FunctionPageClient functions={allFunctions} />
    </div>
  )
}
