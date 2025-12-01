import { redirect } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import { FunctionPageClient } from '@/components/function-page-client'
import { FunctionPageContent } from '@/components/function-page-content'
import { ArrowLeft } from 'lucide-react'

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

  return (
    <div className="min-h-[100dvh] relative">
      <div
        className="fixed inset-0 pointer-events-none"
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

      <div className="fixed inset-0 gradient-wedding pointer-events-none"></div>

      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] font-medium transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
              Back to Home
            </span>
          </Link>
        </div>
      </div>

      <FunctionPageContent functionData={functionData} />

      <FunctionPageClient functions={allFunctions} />
    </div>
  )
}
