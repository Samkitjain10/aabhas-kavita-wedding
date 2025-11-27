import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { HomePageClient } from '@/components/home-page-client'
import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'

async function getFunctions() {
  try {
    return await prisma.function.findMany({
      orderBy: { createdAt: 'asc' },
    })
  } catch (error) {
    console.error('Error fetching functions:', error)
    return []
  }
}

export default async function HomePage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login')
  }

  const functions = await getFunctions()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Watermark Background */}
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

      {/* Hero Banner Section */}
      <section className="relative z-10 pt-20 pb-32 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center">
            <Sparkles className="h-8 w-8 text-[#D4AF37] animate-pulse" />
          </div>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 50%, #D4A5A5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Aabhas & Kavita
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-[#D4A5A5] fill-[#D4A5A5]" />
            <p 
              className="text-2xl md:text-3xl lg:text-4xl text-gray-700"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Our Wedding Gallery
            </p>
            <Heart className="h-6 w-6 text-[#D4A5A5] fill-[#D4A5A5]" />
          </div>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Relive the beautiful moments from our special day
          </p>
        </div>
      </section>

      {/* Functions Grid with Glass Morphism */}
      <section className="relative z-10 px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          {functions.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No functions available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {functions.map((func, index) => (
                <Link 
                  key={func.id} 
                  href={`/function/${func.id}`}
                  className="group"
                >
                  <div 
                    className="glass-strong rounded-3xl p-5 h-full flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    style={{
                      background: 'rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                  >
                    <div>
                      <div className="mb-3">
                      <div 
                        className="text-4xl font-bold mb-2"
                        style={{ 
                          fontFamily: 'var(--font-playfair)',
                          color: '#D4AF37',
                        }}
                      >
                        {func.name}
                      </div>
                      {func.description && (
                        <p 
                          className="text-gray-700 leading-relaxed"
                          style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
                        >
                          {func.description}
                        </p>
                      )}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>View Gallery</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <HomePageClient functions={functions} />
    </div>
  )
}
