"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play } from 'lucide-react'
import { Language, translateFunctionName } from '@/lib/translations'

interface VideosPageHeaderProps {
  functionId: number
  functionName: string
  photosCount: number
  videosCount: number
  totalCount: number
}

export function VideosPageHeader({
  functionId,
  functionName,
  photosCount,
  videosCount,
  totalCount,
}: VideosPageHeaderProps) {
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

  return (
    <>
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link
            href={`/function/${functionId}`}
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8941F] font-medium transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
              {language === 'hi' ? 'वापस' : 'Back to'} {translateFunctionName(functionName, language)}
            </span>
          </Link>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-6 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E8C5B8] to-[#D4A5A5] shadow-lg flex items-center justify-center">
              <Play className="h-12 w-12 text-white" strokeWidth={1.5} fill="white" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {language === 'hi' ? 'शादी की गैलरी' : 'Wedding Gallery'}
              </p>
              <h1 className="text-5xl font-bold text-gray-900">
                {language === 'hi' ? 'वीडियो' : 'Videos'}
              </h1>
              <p className="text-gray-600">
                {language === 'hi'
                  ? `${translateFunctionName(functionName, language)} से हाइलाइट्स`
                  : `Highlights from ${translateFunctionName(functionName, language)}`
                }
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 text-center">
            <div>
              <p className="text-2xl font-semibold text-gray-900">{photosCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">
                {language === 'hi' ? 'तस्वीरें' : 'Photos'}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">{videosCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">
                {language === 'hi' ? 'वीडियो' : 'Videos'}
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">{totalCount}</p>
              <p className="text-xs tracking-wide uppercase text-gray-500">
                {language === 'hi' ? 'अपलोड' : 'Uploads'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

