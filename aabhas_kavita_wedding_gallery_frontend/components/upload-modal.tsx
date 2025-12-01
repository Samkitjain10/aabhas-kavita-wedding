"use client"

import { useState, useCallback, useRef, useEffect } from 'react'
import { Modal } from './ui/modal'
import { Button } from './ui/button'
import { Upload, X, Sparkles, CheckCircle2, Image as ImageIcon, Video, Trash2 } from 'lucide-react'
import imageCompression from 'browser-image-compression'
import { motion, AnimatePresence } from 'framer-motion'
import { compressVideo as compressVideoFile } from '@/lib/video'
import { Language, translateFunctionName, getTranslations } from '@/lib/translations'

interface Function {
  id: number
  name: string
}

interface FileWithPreview {
  file: File
  preview?: string
  compressed?: File
  originalSize: number
  compressedSize: number
  type: 'image' | 'video'
  progress: number
  status: 'pending' | 'compressing' | 'ready' | 'uploading' | 'complete' | 'error'
}

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
  functions: Function[]
  onUploadComplete: () => void
}

export function UploadModal({ isOpen, onClose, functions, onUploadComplete }: UploadModalProps) {
  const [selectedFunctions, setSelectedFunctions] = useState<number[]>([])
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [uploading, setUploading] = useState(false)
  const [overallProgress, setOverallProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [language, setLanguage] = useState<Language>('en')
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const toggleFunction = (functionId: number) => {
    setSelectedFunctions(prev =>
      prev.includes(functionId) ? [] : [functionId]
    )
  }

  const convertHeicToJpeg = async (file: File): Promise<File> => {
    // Only run in browser
    if (typeof window === 'undefined') {
      throw new Error('HEIC conversion can only be performed in the browser')
    }

    // Check if file is already in a browser-readable format
    const browserReadableTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (browserReadableTypes.includes(file.type.toLowerCase())) {
      // File is already browser-readable, return as-is
      return file
    }

    try {
      // Dynamic import to avoid SSR issues
      const heic2any = (await import('heic2any')).default
      
      const convertedBlob = await heic2any({
        blob: file,
        toType: 'image/jpeg',
        quality: 0.92,
      })
      
      // heic2any returns an array, get the first item
      const blob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob
      
      // Create a new File object with JPEG extension
      const fileName = file.name.replace(/\.(heic|heif)$/i, '.jpg')
      return new File([blob], fileName, {
        type: 'image/jpeg',
        lastModified: file.lastModified,
      })
    } catch (error: any) {
      // If heic2any says the image is already browser-readable, return original file
      if (error?.message?.includes('already browser readable') || error?.code === 1) {
        return file
      }
      console.error('HEIC conversion error:', error)
      // Return original file instead of throwing error
      return file
    }
  }

  const compressImage = async (file: File): Promise<File> => {
    // Check if file is HEIC by extension only (more reliable than MIME type)
    const isHeic = file.name.toLowerCase().endsWith('.heic') || 
                   file.name.toLowerCase().endsWith('.heif')
    
    let fileToCompress = file
    if (isHeic) {
      fileToCompress = await convertHeicToJpeg(file)
    }

    const options = {
      maxSizeMB: 5, // Increased for better quality
      maxWidthOrHeight: 2560, // Higher resolution for best quality
      useWebWorker: true,
      fileType: fileToCompress.type,
      initialQuality: 0.92, // High quality compression
    }
    return await imageCompression(fileToCompress, options)
  }

  const compressVideo = async (
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<File> => {
    try {
      const compressed = await compressVideoFile(file, onProgress)
      return compressed
    } catch (error) {
      console.error('Video compression error:', error)
      return file
    }
  }

  const handleFilesChange = useCallback(async (selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return

    setError(null)
    const newFiles: FileWithPreview[] = []

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i]
      // Check for HEIC files by extension only (more reliable than MIME type)
      const isHeic = file.name.toLowerCase().endsWith('.heic') || 
                     file.name.toLowerCase().endsWith('.heif')
      const isImage = file.type.startsWith('image/') || isHeic
      const isVideo = file.type.startsWith('video/')

      if (!isImage && !isVideo) continue

      const fileWithPreview: FileWithPreview = {
        file,
        originalSize: file.size,
        compressedSize: 0,
        type: isImage ? 'image' : 'video',
        progress: 0,
        status: 'pending',
      }

      // Create preview for images and videos
      if (isImage) {
        // Handle HEIC files - convert to JPEG for preview
        if (isHeic) {
          convertHeicToJpeg(file).then(convertedFile => {
            const reader = new FileReader()
            reader.onload = (e) => {
              setFiles(prev => prev.map(f => 
                f.file === file ? { ...f, preview: e.target?.result as string } : f
              ))
            }
            reader.readAsDataURL(convertedFile)
          }).catch(() => {
            // If conversion fails, try to read original file as data URL
            const reader = new FileReader()
            reader.onload = (e) => {
              setFiles(prev => prev.map(f => 
                f.file === file ? { ...f, preview: e.target?.result as string } : f
              ))
            }
            reader.readAsDataURL(file)
          })
        } else {
          const reader = new FileReader()
          reader.onload = (e) => {
            setFiles(prev => prev.map(f => 
              f.file === file ? { ...f, preview: e.target?.result as string } : f
            ))
          }
          reader.readAsDataURL(file)
        }
      } else if (isVideo) {
        // Create video preview thumbnail
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.src = URL.createObjectURL(file)
        video.onloadedmetadata = () => {
          video.currentTime = 0.1 // Get frame at 0.1 seconds
        }
        video.onloadeddata = () => {
          const canvas = document.createElement('canvas')
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          const ctx = canvas.getContext('2d')
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            const thumbnail = canvas.toDataURL('image/jpeg', 0.8)
            setFiles(prev => prev.map(f => 
              f.file === file ? { ...f, preview: thumbnail } : f
            ))
          }
          URL.revokeObjectURL(video.src)
        }
      }

      newFiles.push(fileWithPreview)
    }

    setFiles(prev => [...prev, ...newFiles])

    // Auto-compress images and videos
    for (const fileWithPreview of newFiles) {
      if (fileWithPreview.type === 'image') {
        setFiles(prev => prev.map(f => 
          f.file === fileWithPreview.file ? { ...f, status: 'compressing' } : f
        ))

        try {
          const compressed = await compressImage(fileWithPreview.file)
          setFiles(prev => prev.map(f => 
            f.file === fileWithPreview.file 
              ? { ...f, compressed, compressedSize: compressed.size, status: 'ready' }
              : f
          ))
        } catch (err) {
          setFiles(prev => prev.map(f => 
            f.file === fileWithPreview.file 
              ? { ...f, status: 'error' }
              : f
          ))
        }
      } else if (fileWithPreview.type === 'video') {
        // Videos are uploaded as-is (no compression)
        // R2 can handle large files, and client-side compression is unreliable
        setFiles(prev => prev.map(f => 
          f.file === fileWithPreview.file 
            ? { 
                ...f, 
                status: 'ready',
                compressedSize: fileWithPreview.originalSize,
                progress: 100
              }
            : f
        ))
      }
    }
  }, [])

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilesChange(e.target.files)
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    handleFilesChange(e.dataTransfer.files)
  }, [handleFilesChange])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const removeFile = (file: File) => {
    setFiles(prev => prev.filter(f => f.file !== file))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleUpload = async () => {
    if (files.length === 0) {
      setError(t.upload.pleaseSelectFile)
      return
    }
    // Function selection is now optional - if none selected, will use "Other"
    
    // Validate that we have ready files
    const readyFiles = files.filter(f => f.status === 'ready' || f.status === 'uploading' || f.status === 'complete')
    if (readyFiles.length === 0) {
      setError(t.upload.pleaseWaitProcessing)
      return
    }

    setUploading(true)
    setOverallProgress(0)
    setError(null)

    try {
      const readyFiles = files.filter(f => f.status === 'ready')
      const totalFiles = readyFiles.length
      let completed = 0

      for (const fileWithPreview of readyFiles) {
        const fileToUpload = fileWithPreview.compressed || fileWithPreview.file
        const isImage = fileWithPreview.type === 'image'

        setFiles(prev => prev.map(f => 
          f.file === fileWithPreview.file ? { ...f, status: 'uploading' } : f
        ))

        const formData = new FormData()
        formData.append('file', fileToUpload, fileToUpload.name)
        // Send empty array if no function selected - API will use "Other"
        formData.append('functions', JSON.stringify(selectedFunctions.length > 0 ? selectedFunctions : []))
        formData.append('type', isImage ? 'photo' : 'video')
        formData.append('originalSize', fileWithPreview.originalSize.toString())

        // Use fetch API which handles FormData better with Next.js
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
          // Don't set Content-Type header - browser will set it automatically with boundary
        })

        if (!response.ok) {
          let errorMessage = t.upload.uploadFailed
          try {
            const errorData = await response.json()
            errorMessage = errorData.error || errorData.message || errorMessage
            console.error('Upload error response:', errorData)
          } catch (e) {
            errorMessage = await response.text() || errorMessage
            console.error('Failed to parse error response')
          }
          throw new Error(errorMessage)
        }

        const result = await response.json()
        completed++
        setFiles(prev => prev.map(f => 
          f.file === fileWithPreview.file ? { ...f, status: 'complete', progress: 100 } : f
        ))
        setOverallProgress((completed / totalFiles) * 100)
      }

      setTimeout(() => {
        setUploading(false)
        setFiles([])
        setSelectedFunctions([])
        setOverallProgress(0)
        onUploadComplete()
        onClose()
      }, 1000)
    } catch (err: any) {
      const errorMessage = err?.message || err?.error || t.upload.uploadFailed
      console.error('Upload error caught:', err)
      setError(errorMessage)
      setUploading(false)
      setFiles(prev => prev.map(f => 
        f.status === 'uploading' ? { ...f, status: 'error' } : f
      ))
    }
  }

  const readyFiles = files.filter(f => f.status === 'ready' || f.status === 'uploading' || f.status === 'complete')
  const canUpload = readyFiles.length > 0 && !uploading

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t.upload.title} size="2xl">
      <div className="flex flex-col max-h-[70vh] sm:max-h-[75vh]">
        <div className="space-y-4 sm:space-y-6 overflow-y-auto flex-1 pb-4 scrollbar-hide">
        {/* Function Selection */}
        <div>
          <label 
            className="block text-sm font-medium mb-3 px-1"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', color: '#2C2C2C' }}
          >
            {t.upload.selectFunction} <span className="text-gray-400 text-xs block sm:inline">{t.upload.selectFunctionOptional}</span>
          </label>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 px-1 sm:pl-2">
            {functions.map((func) => (
              <motion.button
                key={func.id}
                onClick={() => toggleFunction(func.id)}
                disabled={uploading}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all flex items-center justify-center gap-1 sm:gap-2 ${
                  selectedFunctions.includes(func.id)
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-white shadow-lg'
                    : 'bg-white/60 backdrop-blur-sm border border-[#D4AF37]/30 text-gray-700 hover:bg-[#D4AF37]/20 hover:border-[#B8941F]/50'
                } ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600 }}
              >
                {selectedFunctions.includes(func.id) && (
                  <CheckCircle2 className="inline h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                )}
                <span className="truncate">{translateFunctionName(func.name, language)}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* File Upload Area */}
        <div>
          <label 
            className="block text-sm font-medium mb-3 px-1"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', color: '#2C2C2C' }}
          >
            {t.upload.uploadPhotosVideos}
          </label>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => !uploading && fileInputRef.current?.click()}
            className="mt-1 flex justify-center px-4 sm:px-6 pt-8 sm:pt-12 pb-8 sm:pb-12 border-2 border-dashed rounded-xl sm:rounded-2xl hover:border-[#D4AF37] transition-colors glass cursor-pointer"
          >
            <div className="space-y-3 sm:space-y-4 text-center w-full">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Upload className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-[#D4AF37]" />
              </motion.div>
              <div className="flex text-xs sm:text-sm text-gray-600 justify-center items-center gap-1 sm:gap-2 flex-wrap px-2">
                <span className="font-medium text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem' }}>
                  {t.upload.uploadFiles}
                </span>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem' }}>{t.upload.orDragAndDrop}</span>
              </div>
              <p className="text-xs text-gray-500 px-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {t.upload.fileTypes}
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*,video/*,.heic,.heif"
              multiple
              onChange={handleFileInputChange}
              disabled={uploading}
            />
          </div>
        </div>

        {/* File List */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              <h4 
                className="text-sm font-medium mb-3"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#2C2C2C' }}
              >
                {t.upload.selectedFiles} ({files.length})
              </h4>
              {files.map((fileWithPreview, index) => (
                <motion.div
                  key={`${fileWithPreview.file.name}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="glass rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4"
                >
                  {/* Preview */}
                  <div className="flex-shrink-0 relative">
                    {fileWithPreview.preview ? (
                      <img
                        src={fileWithPreview.preview}
                        alt={fileWithPreview.file.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                        {fileWithPreview.type === 'image' ? (
                          <ImageIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        ) : (
                          <Video className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        )}
                      </div>
                    )}
                    {fileWithPreview.type === 'video' && fileWithPreview.preview && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Video className="h-4 w-4 sm:h-6 sm:w-6 text-white drop-shadow-lg" />
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <p 
                      className="text-xs sm:text-sm font-medium text-gray-900 truncate"
                      style={{ fontFamily: 'var(--font-cormorant)' }}
                    >
                      {fileWithPreview.file.name}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-xs text-gray-600">
                      <span>{t.upload.size}: {formatFileSize(fileWithPreview.originalSize)}</span>
                    </div>
                    {fileWithPreview.status === 'compressing' && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2 mb-1 text-xs text-[#D4AF37]">
                          <Sparkles className="h-4 w-4 animate-pulse" />
                          <span>
                            {fileWithPreview.type === 'video' 
                              ? `${t.upload.compressing} ${Math.round(fileWithPreview.progress)}%`
                              : t.upload.compressing}
                          </span>
                        </div>
                        {fileWithPreview.type === 'video' && fileWithPreview.progress > 0 && (
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div
                              className="h-full rounded-full transition-all duration-300"
                              style={{
                                width: `${fileWithPreview.progress}%`,
                                background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)',
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                    {fileWithPreview.status === 'uploading' && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)',
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${fileWithPreview.progress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    )}
                    {fileWithPreview.status === 'complete' && (
                      <div className="flex items-center gap-2 mt-2 text-xs text-green-600">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{t.upload.uploadedSuccessfully}</span>
                      </div>
                    )}
                  </div>

                  {/* Remove Button */}
                  {fileWithPreview.status !== 'uploading' && fileWithPreview.status !== 'complete' && (
                    <button
                      onClick={() => removeFile(fileWithPreview.file)}
                      disabled={uploading}
                      className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overall Progress Bar */}
        <AnimatePresence>
          {uploading && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex justify-between text-sm mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <span className="text-gray-700">
                  {t.upload.uploadingFiles
                    .replace('{current}', String(readyFiles.filter(f => f.status === 'uploading' || f.status === 'complete').length))
                    .replace('{total}', String(readyFiles.length))}
                </span>
                <span className="text-[#D4AF37] font-semibold">{Math.round(overallProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
        </div>

        {/* Fixed Actions at Bottom */}
        <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-3 pt-4 mt-4 border-t border-gray-200 bg-white/70 backdrop-blur-sm -mx-4 sm:-mx-8 md:-mx-10 px-4 sm:px-8 md:px-10 pb-0 flex-shrink-0">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={uploading}
            className="rounded-xl w-full sm:w-auto"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {t.upload.cancel}
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!canUpload}
            className="rounded-xl px-6 sm:px-8 transition-colors w-full sm:w-auto text-sm sm:text-base"
            style={{
              background: canUpload ? 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)' : '#ccc',
              color: 'white',
              border: 'none',
              fontFamily: 'var(--font-cormorant)',
            }}
            onMouseEnter={(e) => {
              if (canUpload) {
                e.currentTarget.style.background = 'linear-gradient(135deg, #B8941F 0%, #9A7A16 100%)'
              }
            }}
            onMouseLeave={(e) => {
              if (canUpload) {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)'
              }
            }}
          >
            {uploading 
              ? `${t.upload.uploading} ${Math.round(overallProgress)}%` 
              : readyFiles.length === 1 
                ? `${t.upload.uploadFile}` 
                : `${t.upload.uploadFiles} (${readyFiles.length})`
            }
          </Button>
        </div>
      </div>
    </Modal>
  )
}
