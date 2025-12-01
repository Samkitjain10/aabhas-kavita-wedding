"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, Heart } from 'lucide-react'
import { Language, getTranslations, translateFunctionName } from '@/lib/translations'
import { LanguageSwitcher } from './language-switcher'

interface Function {
  id: number
  name: string
}

interface HomePageContentProps {
  functions: Function[]
}

export function HomePageContent({ functions }: HomePageContentProps) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load language preference from localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('wedding-gallery-language') as Language | null
      if (savedLang === 'en' || savedLang === 'hi') {
        setLanguage(savedLang)
      }
    }

    // Listen for language changes from language switcher
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail)
    }

    window.addEventListener('language-changed' as any, handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener('language-changed' as any, handleLanguageChange as EventListener)
    }
  }, [])

  // Update language when changed via switcher
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  const t = getTranslations(language)

  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden overflow-y-auto">
      {/* Watermark Background */}
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

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher onLanguageChange={handleLanguageChange} initialLanguage={language} className="scale-90 sm:scale-100" />
      </div>

      {/* Hero Banner Section */}
      <section className="relative z-10 pt-24 md:pt-28 pb-32 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8 flex justify-center">
            <Sparkles className="h-8 w-8 text-[#D4AF37] animate-pulse" />
          </div>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
            style={{ 
              fontFamily: 'var(--font-playfair)',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 50%, #D4A5A5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingTop: '0.5rem',
            }}
          >
            <span className="block md:inline">{t.couple.firstName}</span>
            <span className="block md:inline md:mx-2"> & </span>
            <span className="block md:inline">{t.couple.secondName}</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-[#D4A5A5] fill-[#D4A5A5]" />
            <p 
              className="text-2xl md:text-3xl lg:text-4xl text-gray-700"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {t.home.title}
            </p>
            <Heart className="h-6 w-6 text-[#D4A5A5] fill-[#D4A5A5]" />
          </div>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {t.home.subtitle}
          </p>
        </div>
      </section>

      {/* Functions Grid with Glass Morphism */}
      <section className="relative z-10 px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          {functions.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {t.home.noFunctions}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {functions.map((func) => (
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
                        {translateFunctionName(func.name, language)}
                      </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                      <span className="font-medium" style={{ fontFamily: 'var(--font-cormorant)' }}>
                        {t.home.viewGallery}
                      </span>
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
    </div>
  )
}

