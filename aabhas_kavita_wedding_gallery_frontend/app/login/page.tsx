"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sparkles, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { Language, getTranslations } from '@/lib/translations'
import { LanguageSwitcher } from '@/components/language-switcher'

const t = getTranslations('en') // Will be updated dynamically

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [language, setLanguage] = useState<Language>('en')
  const router = useRouter()

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })

      const data = await response.json()

      if (!response.ok) {
        const t = getTranslations(language)
        throw new Error(data.message || t.login.loginFailed)
      }

      router.push('/')
      router.refresh()
    } catch (err: any) {
      const t = getTranslations(language)
      setError(err.message || t.login.notAuthorized)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[100dvh] flex items-center justify-center px-4 py-8 md:py-12 relative overflow-x-hidden overflow-y-auto">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/Aabhas and Kavita wedding logo.png")',
          backgroundSize: '60% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: '0.05',
          zIndex: 0,
        }}
      ></div>
      <div className="absolute inset-0 gradient-wedding"></div>
      
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher onLanguageChange={handleLanguageChange} initialLanguage={language} className="scale-90 sm:scale-100" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md w-full"
      >
        <div 
          className="glass-strong rounded-3xl p-8 md:p-10 shadow-2xl overflow-visible"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
          }}
        >
          <div className="text-center mb-8 overflow-visible pt-2">
            <div className="flex justify-center mb-6">
              <Sparkles className="h-8 w-8 text-[#D4AF37] animate-pulse" />
            </div>
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 whitespace-nowrap leading-tight"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingTop: '0.5rem',
              }}
            >
              {getTranslations(language).couple.fullName}
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-[#D4A5A5] fill-[#D4A5A5]" />
              <h2 
                className="text-2xl font-semibold"
                style={{ 
                  fontFamily: 'var(--font-cormorant)',
                  color: '#2C2C2C',
                }}
              >
                {getTranslations(language).login.title}
              </h2>
              <Heart className="h-5 w-5 text-[#D4A5A5] fill-[#D4A5A5]" />
            </div>
            <p 
              className="text-gray-600 mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
            >
              {getTranslations(language).login.subtitle}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', color: '#2C2C2C' }}
              >
                {getTranslations(language).login.phoneLabel}
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={getTranslations(language).login.phonePlaceholder}
                required
                suppressHydrationWarning
                className="w-full px-5 py-4 rounded-xl border-2 border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none transition-all bg-white/80 backdrop-blur-sm"
                style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif', fontSize: '1.1rem', letterSpacing: '0.5px' }}
              />
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {error}
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full py-4 text-lg font-semibold rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: 'white',
                  border: 'none',
                  fontFamily: 'var(--font-cormorant)',
                }}
                disabled={loading}
              >
                {loading ? getTranslations(language).login.loggingIn : getTranslations(language).login.enterGallery}
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
