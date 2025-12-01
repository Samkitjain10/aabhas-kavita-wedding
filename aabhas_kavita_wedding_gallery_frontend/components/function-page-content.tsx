"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Folder, Camera, Video, ArrowLeft } from 'lucide-react'
import { Language, getTranslations, translateFunctionName } from '@/lib/translations'

interface FunctionData {
  id: number
  name: string
  media: { type: string }[]
}

interface FunctionPageContentProps {
  functionData: FunctionData
}

export function FunctionPageContent({ functionData }: FunctionPageContentProps) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('wedding-gallery-language') as Language | null
      if (savedLang === 'en' || savedLang === 'hi') {
        setLanguage(savedLang)
      }
    }

    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail)
    }

    window.addEventListener('language-changed' as any, handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener('language-changed' as any, handleLanguageChange as EventListener)
    }
  }, [])

  const t = getTranslations(language)
  const photoCount = functionData.media.filter((m) => m.type === 'photo').length
  const videoCount = functionData.media.filter((m) => m.type === 'video').length

  const folderCards = [
    {
      title: language === 'hi' ? 'तस्वीरें' : 'Photos',
      description: language === 'hi' ? 'इस उत्सव की सभी कैप्चर की गई तस्वीरें।' : 'All captured moments from this celebration.',
      href: `/function/${functionData.id}/photos`,
      icon: <Camera className="h-8 w-8" />,
      count: photoCount,
      gradient: 'from-[#D4AF37] to-[#B8941F]',
    },
    {
      title: language === 'hi' ? 'वीडियो' : 'Videos',
      description: language === 'hi' ? 'हाइलाइट्स और दिल को छूने वाले क्लिप देखें।' : 'Watch the highlights and heartfelt clips.',
      href: `/function/${functionData.id}/videos`,
      icon: <Video className="h-8 w-8" />,
      count: videoCount,
      gradient: 'from-[#E8C5B8] to-[#D4A5A5]',
    },
  ]

  return (
    <div className="relative z-10 container mx-auto px-4 pt-6 pb-12">
      <div className="mb-12">
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
          {translateFunctionName(functionData.name, language)}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {folderCards.map((folder) => (
          <Link key={folder.title} href={folder.href} className={`group ${folder.title === (language === 'hi' ? 'वीडियो' : 'Videos') ? 'mb-12 md:mb-0' : ''}`}>
            <div
              className="rounded-3xl p-8 h-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl transition-all duration-300 group-hover:-translate-y-2"
            >
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
                    {folder.count} {language === 'hi' ? 'आइटम' : 'items'}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {folder.description}
              </p>
              
              <div className="inline-flex items-center gap-2 text-[#D4AF37] font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {language === 'hi' ? 'देखें' : 'View'} {folder.title}
                <Folder className="h-5 w-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

