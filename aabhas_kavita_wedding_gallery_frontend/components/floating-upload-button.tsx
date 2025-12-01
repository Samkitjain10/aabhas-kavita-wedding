"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Upload, Sparkles, Download } from 'lucide-react'
import { UploadModal } from './upload-modal'
import { HowToDownloadModal } from './how-to-download-modal'
import { motion, AnimatePresence } from 'framer-motion'
import { Language, getTranslations } from '@/lib/translations'

interface Function {
  id: number
  name: string
}

interface FloatingUploadButtonProps {
  functions: Function[]
  onUploadComplete: () => void
}

export function FloatingUploadButton({ functions, onUploadComplete }: FloatingUploadButtonProps) {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [hasSelectedPhotos, setHasSelectedPhotos] = useState(false) // Start as false so buttons show by default
  const [language, setLanguage] = useState<Language>('en')
  const pathname = usePathname()

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

  // Clear selections when on function page or home page
  useEffect(() => {
    if (typeof window === 'undefined') return

    // On home page, function page, or gallery page, clear all selections
    const isHomePage = pathname === '/'
    const isFunctionPage = /^\/function\/\d+$/.test(pathname)
    const isGalleryPage = pathname === '/gallery' || pathname.startsWith('/gallery?')
    
    if (isHomePage || isFunctionPage || isGalleryPage) {
      // Clear all selected photos from localStorage
      try {
        const keysToRemove: string[] = []
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key && key.startsWith('selected-photos-')) {
            keysToRemove.push(key)
          }
        }
        keysToRemove.forEach(key => localStorage.removeItem(key))
        setHasSelectedPhotos(false)
      } catch (error) {
        console.error('Error clearing selected photos:', error)
        setHasSelectedPhotos(false)
      }
    }
  }, [pathname])

  // Check for selected photos in localStorage
  useEffect(() => {
    const checkSelectedPhotos = () => {
      if (typeof window === 'undefined') return
      
      const currentPath = pathname || window.location.pathname
      
      // On home page, function page, or gallery page, always show buttons
      const isHomePage = currentPath === '/' || currentPath === ''
      const isFunctionPage = /^\/function\/\d+$/.test(currentPath)
      const isGalleryPage = currentPath === '/gallery' || currentPath.startsWith('/gallery?')
      
      if (isHomePage || isFunctionPage || isGalleryPage) {
        setHasSelectedPhotos(false)
        return
      }
      
      try {
        // Check all localStorage keys that match the pattern 'selected-photos-*'
        let hasSelections = false
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key && key.startsWith('selected-photos-')) {
            const value = localStorage.getItem(key)
            if (value && value !== '[]' && value !== 'null') {
              try {
                const ids = JSON.parse(value) as number[]
                if (Array.isArray(ids) && ids.length > 0) {
                  hasSelections = true
                  break
                } else {
                  // Clean up empty or invalid entries
                  localStorage.removeItem(key)
                }
              } catch (e) {
                // Invalid JSON, remove it
                localStorage.removeItem(key)
              }
            } else {
              // Empty array or null, remove it
              localStorage.removeItem(key)
            }
          }
        }
        setHasSelectedPhotos(hasSelections)
      } catch (error) {
        console.error('Error checking selected photos:', error)
        // On error, default to showing buttons
        setHasSelectedPhotos(false)
      }
    }

    // Check on mount
    checkSelectedPhotos()

    // Listen for custom event from PhotosGrid
    const handleSelectionChange = (event: CustomEvent) => {
      if (event.detail && typeof event.detail.hasSelections === 'boolean') {
        setHasSelectedPhotos(event.detail.hasSelections)
      }
    }

    // Listen for storage events (when localStorage changes in other tabs/windows)
    window.addEventListener('storage', checkSelectedPhotos)
    
    // Listen for custom photo selection events
    window.addEventListener('photoSelectionChanged', handleSelectionChange as EventListener)

    // Also check periodically (in case changes happen in same tab)
    const interval = setInterval(checkSelectedPhotos, 500)

    return () => {
      window.removeEventListener('storage', checkSelectedPhotos)
      window.removeEventListener('photoSelectionChanged', handleSelectionChange as EventListener)
      clearInterval(interval)
    }
  }, [pathname])

  return (
    <>
      {!hasSelectedPhotos && (
        <div 
          className="fixed left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 z-[100] flex gap-3"
          style={{
            bottom: `calc(1.5rem + env(safe-area-inset-bottom))`,
          }}
        >
          <motion.button
            onClick={() => setIsDownloadModalOpen(true)}
            className="rounded-full sm:rounded-full px-4 py-3 shadow-xl bg-[#D4AF37] hover:bg-[#B8941F] text-white flex items-center gap-2 z-[100]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-5 w-5 flex-shrink-0" />
            <span className="font-semibold whitespace-nowrap text-sm sm:text-base" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {t.common.howToDownload}
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => setIsUploadModalOpen(true)}
            className="rounded-full sm:rounded-full px-4 py-3 shadow-xl bg-[#D4A017] hover:bg-[#caa113] text-white flex items-center gap-2 z-[100]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-5 w-5 flex-shrink-0" />
            <span className="font-semibold whitespace-nowrap text-sm sm:text-base" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {t.common.uploadYours}
            </span>
            <Upload className="h-5 w-5 flex-shrink-0" />
          </motion.button>
        </div>
      )}
      
      <AnimatePresence>
        {isUploadModalOpen && (
          <UploadModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
            functions={functions}
            onUploadComplete={onUploadComplete}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDownloadModalOpen && (
          <HowToDownloadModal
            isOpen={isDownloadModalOpen}
            onClose={() => setIsDownloadModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
