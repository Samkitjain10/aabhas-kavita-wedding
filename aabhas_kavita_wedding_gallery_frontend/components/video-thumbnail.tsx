"use client"

import { useRef, useEffect, useState } from 'react'
import { Play } from 'lucide-react'

interface VideoThumbnailProps {
  videoUrl: string
  alt: string
  className?: string
}

export function VideoThumbnail({ videoUrl, alt, className = '' }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      // Seek to first frame
      video.currentTime = 0.1
      setLoaded(true)
    }

    const handleError = () => {
      setError(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    // Load video metadata
    video.load()

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [videoUrl])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading spinner overlay (shown until first frame is ready) */}
      {!loaded && !error && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="h-10 w-10 rounded-full border-4 border-white/70 border-t-transparent animate-spin"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
            aria-label="Loading"
          />
        </div>
      )}

      {/* Video element showing first frame as preview */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        preload="metadata"
        muted
        playsInline
        style={{ pointerEvents: 'none' }}
      />

      {/* Play button overlay - only show after video has loaded */}
      {loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/55 backdrop-blur-sm rounded-full p-4 shadow-lg border border-white/40">
            <Play className="h-8 w-8 text-white fill-white drop-shadow-md" />
          </div>
        </div>
      )}

      {/* Fallback if video fails to load */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E8C5B8] to-[#D4A5A5]">
          <Play className="h-10 w-10 text-white" />
        </div>
      )}
    </div>
  )
}

