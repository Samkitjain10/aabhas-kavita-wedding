"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DownloadProgress } from '@/components/download-progress'
import { motion, AnimatePresence } from 'framer-motion'

interface Photo {
  id: number
  url: string
  originalUrl?: string
  fileName: string
}

interface PhotosGridProps {
  functionId: number
  photos: Photo[]
  isSelectionMode?: boolean
  onSelectionModeChange?: (enabled: boolean) => void
}

export function PhotosGrid({ functionId, photos, isSelectionMode = false, onSelectionModeChange }: PhotosGridProps) {
  const storageKey = `selected-photos-${functionId}`
  
  // Always start with empty Set to avoid hydration mismatch
  const [selectedPhotos, setSelectedPhotos] = useState<Set<number>>(new Set())
  
  // Clear selections when selection mode is turned off
  useEffect(() => {
    if (!isSelectionMode && selectedPhotos.size > 0) {
      setSelectedPhotos(new Set())
    }
  }, [isSelectionMode])
  
  // Load selections from localStorage only after mount (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const ids = JSON.parse(stored) as number[]
        // Filter to only include IDs that still exist in photos
        const validIds = ids.filter(id => photos.some(p => p.id === id))
        if (validIds.length > 0) {
          setSelectedPhotos(new Set(validIds))
        }
      }
    } catch (error) {
      console.error('Error loading selections from localStorage:', error)
    }
  }, [storageKey, photos])

  // Save selections to localStorage whenever they change
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (selectedPhotos.size > 0) {
        localStorage.setItem(storageKey, JSON.stringify(Array.from(selectedPhotos)))
      } else {
        localStorage.removeItem(storageKey)
      }
      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent('photoSelectionChanged', { 
        detail: { hasSelections: selectedPhotos.size > 0 } 
      }))
    } catch (error) {
      console.error('Error saving selections to localStorage:', error)
    }
  }, [selectedPhotos, storageKey])

  // Re-validate selections when photos array changes (e.g., after upload)
  useEffect(() => {
    setSelectedPhotos(prev => {
      const validIds = Array.from(prev).filter(id => photos.some(p => p.id === id))
      if (validIds.length !== prev.size) {
        return new Set(validIds)
      }
      return prev
    })
  }, [photos])
  const [downloading, setDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [currentDownloadFile, setCurrentDownloadFile] = useState(0)
  const [currentFileName, setCurrentFileName] = useState<string>('')

  const toggleSelection = (photoId: number) => {
    setSelectedPhotos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(photoId)) {
        newSet.delete(photoId)
      } else {
        if (newSet.size < 15) {
          newSet.add(photoId)
        }
      }
      return newSet
    })
  }

  const handleDownload = async () => {
    if (selectedPhotos.size === 0) return

    const photosToDownload = photos.filter(p => selectedPhotos.has(p.id))
    if (photosToDownload.length === 0) return

    setDownloading(true)
    setDownloadProgress(0)
    setCurrentDownloadFile(0)

    for (let i = 0; i < photosToDownload.length; i++) {
      const photo = photosToDownload[i]
      setCurrentDownloadFile(i + 1)
      setCurrentFileName(photo.fileName)
      
      // Use proxy API route to avoid CORS issues
      const downloadUrl = `/api/download/${photo.id}`
      
      // Simulate download progress over 3-4 seconds
      const duration = 3500 // 3.5 seconds
      const startTime = Date.now()
      
      // Fetch the file through proxy
      const response = await fetch(downloadUrl)
      if (!response.ok) {
        console.error('Download failed for photo', photo.id, response.statusText)
        continue
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
      let downloadFileName = photo.fileName
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
        let extension = 'jpg'
        if (blob.type) {
          if (blob.type.includes('jpeg') || blob.type.includes('jpg')) {
            extension = 'jpg'
          } else if (blob.type.includes('png')) {
            extension = 'png'
          } else if (blob.type.includes('gif')) {
            extension = 'gif'
          } else if (blob.type.includes('webp')) {
            extension = 'webp'
          }
        }
        downloadFileName = `photo-${photo.id}.${extension}`
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
      
      // Small delay between files
      if (i < photosToDownload.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 200))
        setDownloadProgress(0)
      }
    }

    // Reset after a brief moment
    setTimeout(() => {
      setDownloading(false)
      setDownloadProgress(0)
      setCurrentDownloadFile(0)
      setCurrentFileName('')
      setSelectedPhotos(new Set())
    }, 500)
  }

  const clearSelection = () => {
    setSelectedPhotos(new Set())
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-xl">No photos uploaded yet.</p>
      </div>
    )
  }

  return (
    <>
      <DownloadProgress
        isVisible={downloading}
        progress={downloadProgress}
        currentFile={currentDownloadFile}
        totalFiles={selectedPhotos.size}
        fileName={currentFileName}
      />

             <AnimatePresence>
               {isSelectionMode && selectedPhotos.size > 0 && (
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 20 }}
                   className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4AF37]/20 px-5 py-3 flex items-center gap-5 max-w-[95vw]"
                 >
                   <div className="flex items-center gap-4">
                     <span className="text-base font-semibold text-gray-900" style={{ fontFamily: 'var(--font-cormorant)' }}>
                       {selectedPhotos.size} of {Math.min(15, photos.length)} selected
                     </span>
                     {selectedPhotos.size > 0 && (
                       <button
                         onClick={clearSelection}
                         className="text-[#D4AF37] hover:text-[#B8941F] text-sm font-medium transition-colors" style={{ fontFamily: 'var(--font-cormorant)' }}
                       >
                         Clear
                       </button>
                     )}
                   </div>
                   <Button
                     onClick={handleDownload}
                     disabled={downloading}
                     className="bg-[#D4AF37] hover:bg-[#B8941F] text-white rounded-full px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
                     style={{ fontFamily: 'var(--font-cormorant)' }}
                   >
                     <Download className="h-5 w-5 flex-shrink-0" />
                     <span className="text-sm font-semibold">
                       {downloading 
                         ? 'Downloading...' 
                         : `Download ${selectedPhotos.size} Photo${selectedPhotos.size > 1 ? 's' : ''}`
                       }
                     </span>
                   </Button>
                 </motion.div>
               )}
             </AnimatePresence>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {photos.map((photo, index) => {
          const isSelected = selectedPhotos.has(photo.id)
          // First 6 images (above the fold) should load eagerly
          const isAboveFold = index < 6
          return (
            <div key={photo.id} className="relative aspect-square overflow-hidden rounded-lg group">
              {isSelectionMode && (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleSelection(photo.id)
                  }}
                  className={`absolute top-2 left-2 z-10 rounded-full p-1.5 transition-all ${
                    isSelected
                      ? 'bg-[#D4AF37] text-white'
                      : 'bg-white/90 text-gray-400 hover:bg-white'
                  }`}
                  aria-label={isSelected ? 'Deselect photo' : 'Select photo'}
                >
                  <CheckCircle2 className={`h-5 w-5 ${isSelected ? 'fill-current' : ''}`} />
                </button>
              )}
              {isSelectionMode ? (
                <div
                  onClick={() => toggleSelection(photo.id)}
                  className="block w-full h-full cursor-pointer"
                >
                  <Image
                    src={photo.url}
                    alt={photo.fileName}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    loading={isAboveFold ? "eager" : "lazy"}
                    unoptimized
                  />
                </div>
              ) : (
                <Link
                  href={`/gallery?media=${photo.id}`}
                  className="block w-full h-full"
                >
                  <Image
                    src={photo.url}
                    alt={photo.fileName}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    loading={isAboveFold ? "eager" : "lazy"}
                    unoptimized
                  />
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

