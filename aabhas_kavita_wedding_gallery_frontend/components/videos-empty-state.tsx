"use client"

import { useState, useEffect } from 'react'
import { Language, getTranslations } from '@/lib/translations'

export function VideosEmptyState() {
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

  return (
    <div className="text-center py-20">
      <p className="text-gray-500 text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
        {t.common.noVideosUploaded}
      </p>
    </div>
  )
}

