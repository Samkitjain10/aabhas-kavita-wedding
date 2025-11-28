"use client"

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DownloadProgress } from '@/components/download-progress'
import { FloatingUploadButton } from '@/components/floating-upload-button'
import { motion } from 'framer-motion'

interface Media {
  id: number
  type: string
  url: string
  originalUrl?: string
  fileName: string
  function: {
    id: number
    name: string
  }
}

interface Function {
  id: number
  name: string
}

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const mediaId = searchParams.get('media')
  const [media, setMedia] = useState<Media | null>(null)
  const [allMedia, setAllMedia] = useState<Media[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [currentDownloadFile, setCurrentDownloadFile] = useState(0)
  const [currentFileName, setCurrentFileName] = useState<string>('')
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [functions, setFunctions] = useState<Function[]>([])

  const fetchFunctions = useCallback(async () => {
    try {
      const response = await fetch('/api/functions')
      if (!response.ok) throw new Error('Failed to fetch functions')
      const data = await response.json()
      setFunctions(data.functions || [])
    } catch (error) {
      console.error('Error fetching functions:', error)
    }
  }, [])

  const fetchMedia = useCallback(async (id: number) => {
    try {
      const response = await fetch(`/api/media/${id}`)
      if (!response.ok) throw new Error('Failed to fetch media')
      
      const data = await response.json()
      setMedia(data.media)
      setAllMedia(data.allMedia)
      setCurrentIndex(data.allMedia.findIndex((m: Media) => m.id === id))
      setLoading(false)
    } catch (error) {
      console.error('Error fetching media:', error)
      router.push('/')
    }
  }, [router])

  useEffect(() => {
    fetchFunctions()
  }, [fetchFunctions])

  useEffect(() => {
    if (!mediaId) {
      router.push('/')
      return
    }

    fetchMedia(parseInt(mediaId))
  }, [mediaId, router, fetchMedia])

  // Keyboard navigation
  useEffect(() => {
    if (loading || !media) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle keyboard events if user is typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          if (!media || allMedia.length === 0) return
          const sameTypeMedia = allMedia.filter(m => m.type === media.type)
          if (sameTypeMedia.length <= 1) return
          const currentFilteredIndex = sameTypeMedia.findIndex(m => m.id === media.id)
          if (currentFilteredIndex === -1) return
          const prevIndex = (currentFilteredIndex - 1 + sameTypeMedia.length) % sameTypeMedia.length
          const prevMedia = sameTypeMedia[prevIndex]
          router.replace(`/gallery?media=${prevMedia.id}`, { scroll: false })
          fetchMedia(prevMedia.id)
          break
        case 'ArrowRight':
          e.preventDefault()
          if (!media || allMedia.length === 0) return
          const sameTypeMediaNext = allMedia.filter(m => m.type === media.type)
          if (sameTypeMediaNext.length <= 1) return
          const currentFilteredIndexNext = sameTypeMediaNext.findIndex(m => m.id === media.id)
          if (currentFilteredIndexNext === -1) return
          const nextIndex = (currentFilteredIndexNext + 1) % sameTypeMediaNext.length
          const nextMedia = sameTypeMediaNext[nextIndex]
          router.replace(`/gallery?media=${nextMedia.id}`, { scroll: false })
          fetchMedia(nextMedia.id)
          break
        case 'Escape':
          e.preventDefault()
          if (media) {
            const page = media.type === 'photo' ? 'photos' : 'videos'
            router.push(`/function/${media.function.id}/${page}`)
          } else {
            router.push('/')
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [loading, media, allMedia, router, fetchMedia])

  const handleDownload = async () => {
    if (!media) return

    setDownloading(true)
    setDownloadProgress(0)
    setCurrentDownloadFile(1)
    setCurrentFileName(media.fileName)
    
    // Use proxy API route to avoid CORS issues
    const downloadUrl = `/api/download/${media.id}`
    
    // Simulate download progress over 3-4 seconds
    const duration = 3500 // 3.5 seconds
    const startTime = Date.now()
    
    // Fetch the file through proxy
    const response = await fetch(downloadUrl)
    if (!response.ok) {
      console.error('Download failed:', response.statusText)
      setDownloading(false)
      setDownloadProgress(0)
      return
    }
    
    const blob = await response.blob()
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min((elapsed / duration) * 100, 95)
      setDownloadProgress(progress)
    }, 50)

    // Wait for the duration
    await new Promise(resolve => setTimeout(resolve, duration))
    clearInterval(progressInterval)
    
    // Complete the download
    setDownloadProgress(100)
    
    // Get filename from Content-Disposition header or generate one
    let downloadFileName = media.fileName
    const contentDisposition = response.headers.get('Content-Disposition')
    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename="?(.+?)"?$/i)
      if (filenameMatch) {
        downloadFileName = filenameMatch[1]
      }
    }
    
    // Fallback: Generate proper filename if it's "blob" or missing extension
    if (!downloadFileName || downloadFileName === 'blob' || !downloadFileName.includes('.')) {
      // Get file extension from blob type
      let extension = media.type === 'video' ? 'mp4' : 'jpg'
      if (blob.type) {
        if (blob.type.includes('jpeg') || blob.type.includes('jpg')) {
          extension = 'jpg'
        } else if (blob.type.includes('png')) {
          extension = 'png'
        } else if (blob.type.includes('gif')) {
          extension = 'gif'
        } else if (blob.type.includes('webp')) {
          extension = 'webp'
        } else if (blob.type.includes('mp4')) {
          extension = 'mp4'
        } else if (blob.type.includes('webm')) {
          extension = 'webm'
        } else if (blob.type.includes('mov')) {
          extension = 'mov'
        }
      }
      downloadFileName = `${media.type}-${media.id}.${extension}`
    }
    
    // Mobile-friendly download handling
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    
    if (isIOS) {
      // iOS: Open in new tab for user to save manually
      const url = window.URL.createObjectURL(blob)
      const newWindow = window.open(url, '_blank')
      if (newWindow) {
        // Give user time to see the file, then revoke URL after a delay
        setTimeout(() => window.URL.revokeObjectURL(url), 1000)
      } else {
        // Popup blocked, fallback to download
        const a = document.createElement('a')
        a.href = url
        a.download = downloadFileName
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        setTimeout(() => window.URL.revokeObjectURL(url), 1000)
      }
    } else {
      // Android and Desktop: Use standard download
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = downloadFileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }

    // Reset after a brief moment
    setTimeout(() => {
      setDownloading(false)
      setDownloadProgress(0)
      setCurrentDownloadFile(0)
      setCurrentFileName('')
    }, 500)
  }

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!media || allMedia.length === 0) return
    
    // Filter to only include media of the same type
    const sameTypeMedia = allMedia.filter(m => m.type === media.type)
    if (sameTypeMedia.length <= 1) return
    
    // Find current index in filtered list
    const currentFilteredIndex = sameTypeMedia.findIndex(m => m.id === media.id)
    if (currentFilteredIndex === -1) return
    
    // Calculate new index
    const newIndex = direction === 'next'
      ? (currentFilteredIndex + 1) % sameTypeMedia.length
      : (currentFilteredIndex - 1 + sameTypeMedia.length) % sameTypeMedia.length
    
    const newMedia = sameTypeMedia[newIndex]
    // Use replace instead of push to avoid adding to history stack
    router.replace(`/gallery?media=${newMedia.id}`, { scroll: false })
    fetchMedia(newMedia.id)
  }

  const handleClose = () => {
    // Navigate back to the appropriate page based on media type
    if (media) {
      const page = media.type === 'photo' ? 'photos' : 'videos'
      router.push(`/function/${media.function.id}/${page}`)
    } else {
      router.push('/')
    }
  }

  // Swipe handlers
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      navigateMedia('next')
    }
    if (isRightSwipe) {
      navigateMedia('prev')
    }
    
    // Reset
    setTouchStart(null)
    setTouchEnd(null)
  }

  if (loading || !media) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-white">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  const downloadUrl = media.originalUrl || media.url
  const captionTitle =
    media.fileName && media.fileName !== 'blob' ? media.fileName : 'Wedding Memory'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0" style={{ touchAction: 'pan-y' }}>
      <DownloadProgress
        isVisible={downloading}
        progress={downloadProgress}
        currentFile={currentDownloadFile}
        totalFiles={1}
        fileName={currentFileName}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-xl" onClick={handleClose} />

      <div className="relative z-10 w-full h-full sm:max-w-5xl sm:max-h-[95vh] sm:h-auto rounded-none sm:rounded-3xl bg-white/80 backdrop-blur-2xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col">
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleClose()
          }}
          onTouchStart={(e) => {
            e.stopPropagation()
          }}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 text-gray-500 hover:text-gray-800 active:text-gray-900 transition-colors bg-white/90 rounded-full shadow-lg touch-manipulation"
          style={{ 
            minWidth: '32px', 
            minHeight: '32px',
            width: '32px',
            height: '32px',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Close"
        >
          <X className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>

        <div className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr]">
          <div 
            className="flex items-center justify-center bg-black/5 p-2 sm:p-4 relative min-h-0"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {media && allMedia.filter(m => m.type === media.type).length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateMedia('prev')
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                  }}
                  className="absolute left-1 sm:left-3 z-20 text-gray-700 hover:text-gray-900 active:text-gray-950 bg-white/90 rounded-full shadow-lg transition-colors touch-manipulation"
                  style={{ 
                    minWidth: '44px',
                    minHeight: '44px',
                    width: '32px',
                    height: '32px',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateMedia('next')
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                  }}
                  className="absolute right-1 sm:right-3 z-20 text-gray-700 hover:text-gray-900 active:text-gray-950 bg-white/90 rounded-full shadow-lg transition-colors touch-manipulation"
                  style={{ 
                    minWidth: '44px',
                    minHeight: '44px',
                    width: '32px',
                    height: '32px',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  aria-label="Next"
                >
                  <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                </button>
              </>
            )}
            {media.type === 'photo' ? (
              <Image
                src={media.url}
                alt={captionTitle}
                width={1920}
                height={1080}
                className="max-h-[70vh] max-w-full w-auto h-auto object-contain rounded-lg sm:rounded-2xl"
                priority
                unoptimized
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            ) : (
              <video
                src={media.url}
                controls
                autoPlay
                className="max-h-[70vh] max-w-full w-full h-auto rounded-lg sm:rounded-2xl"
                style={{ maxWidth: '100%', height: 'auto' }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          <div className="bg-white/80 border-t sm:border-t-0 sm:border-l border-white/60 p-4 sm:p-6 flex flex-col gap-4 flex-shrink-0">
            {/* Mobile: Heading and Download button on same line */}
            <div className="flex flex-row items-center justify-between gap-2 sm:flex-col sm:items-start sm:gap-0">
              <div className="text-xs uppercase tracking-wide text-gray-500">
                {media.function.name}
              </div>
              <Button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation sm:hidden flex-shrink-0"
                style={{ minHeight: '40px', minWidth: '40px', width: '40px', height: '40px', padding: '0' }}
              >
                <Download className="h-5 w-5" />
              </Button>
            </div>
            {/* File name */}
            <div className="sm:block">
              <h3 className="text-base font-semibold text-gray-900 break-words">
                {captionTitle}
              </h3>
            </div>
            {/* Desktop: Download button with text */}
            <Button
              onClick={handleDownload}
              disabled={downloading}
              className="hidden sm:flex bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full w-full disabled:opacity-50 disabled:cursor-not-allowed py-2 touch-manipulation"
              style={{ minHeight: '48px' }}
            >
              <Download className="h-4 w-4 mr-2" />
              {downloading 
                ? 'Downloading...' 
                : media.type === 'video' 
                  ? 'Download Video' 
                  : 'Download Photo'
              }
            </Button>
          </div>
        </div>
      </div>
      
      <FloatingUploadButton 
        functions={functions} 
        onUploadComplete={() => {
          router.refresh()
        }} 
      />
    </div>
  )
}

