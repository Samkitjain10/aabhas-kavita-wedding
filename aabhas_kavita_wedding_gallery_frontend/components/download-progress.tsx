"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Download, CheckCircle2 } from 'lucide-react'

interface DownloadProgressProps {
  isVisible: boolean
  progress: number
  currentFile: number
  totalFiles: number
  fileName?: string
}

export function DownloadProgress({
  isVisible,
  progress,
  currentFile,
  totalFiles,
  fileName,
}: DownloadProgressProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed left-1/2 -translate-x-1/2 z-[60] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#D4AF37]/20 p-6 min-w-[320px] max-w-md"
          style={{
            bottom: `calc(1.5rem + env(safe-area-inset-bottom))`,
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0">
              {progress === 100 ? (
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              ) : (
                <Download className="h-6 w-6 text-[#D4AF37] animate-pulse" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {progress === 100 ? 'Download Complete' : 'Downloading...'}
              </p>
              {totalFiles > 1 && (
                <p className="text-xs text-gray-500">
                  {currentFile} of {totalFiles} files
                </p>
              )}
              {fileName && totalFiles === 1 && (
                <p className="text-xs text-gray-500 truncate">{fileName}</p>
              )}
            </div>
            <div className="text-sm font-semibold text-[#D4AF37]">
              {Math.round(progress)}%
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #D4AF37 0%, #B8941F 100%)',
              }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

