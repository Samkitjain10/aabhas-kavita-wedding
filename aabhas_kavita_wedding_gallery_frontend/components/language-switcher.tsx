"use client"

import { useState, useEffect } from 'react'
import { Language, getTranslations } from '@/lib/translations'
import { Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface LanguageSwitcherProps {
  onLanguageChange?: (lang: Language) => void
  className?: string
  initialLanguage?: Language
}

export function LanguageSwitcher({ onLanguageChange, className = '', initialLanguage }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage || 'en')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Load language preference from localStorage
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('wedding-gallery-language') as Language | null
      if (savedLang === 'en' || savedLang === 'hi') {
        setLanguage(savedLang)
        onLanguageChange?.(savedLang)
      } else if (initialLanguage) {
        setLanguage(initialLanguage)
        onLanguageChange?.(initialLanguage)
      }
    }

    // Listen for language changes from other components
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguage(e.detail)
    }

    window.addEventListener('language-changed' as any, handleLanguageChange as EventListener)
    return () => {
      window.removeEventListener('language-changed' as any, handleLanguageChange as EventListener)
    }
  }, [onLanguageChange, initialLanguage])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem('wedding-gallery-language', lang)
      // Dispatch custom event to sync across components
      window.dispatchEvent(new CustomEvent('language-changed', { detail: lang }))
    }
    onLanguageChange?.(lang)
  }

  const t = getTranslations(language)

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all shadow-sm hover:shadow-md"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        <Globe className="h-4 w-4 text-[#D4AF37]" />
        <span className="text-sm font-medium text-gray-700">
          {language === 'en' ? t.common.english : t.common.hindi}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-[#D4AF37]/20 overflow-hidden min-w-[140px]"
            >
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-full px-4 py-3 text-left hover:bg-[#D4AF37]/10 transition-colors ${
                  language === 'en' ? 'bg-[#D4AF37]/20 font-semibold' : ''
                }`}
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                <span className="text-sm text-gray-700">{t.common.english}</span>
              </button>
              <button
                onClick={() => handleLanguageChange('hi')}
                className={`w-full px-4 py-3 text-left hover:bg-[#D4AF37]/10 transition-colors border-t border-[#D4AF37]/10 ${
                  language === 'hi' ? 'bg-[#D4AF37]/20 font-semibold' : ''
                }`}
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                <span className="text-sm text-gray-700">{t.common.hindi}</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

