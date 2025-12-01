"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Play } from 'lucide-react'
import { VideoThumbnail } from './video-thumbnail'

interface VideoGridItemProps {
  href: string
  alt: string
  thumbnailUrl?: string | null
  videoUrl: string
  index: number
}

export function VideoGridItem({
  href,
  alt,
  thumbnailUrl,
  videoUrl,
  index,
}: VideoGridItemProps) {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <Link
      href={href}
      className="aspect-square overflow-hidden rounded-lg relative group bg-black/10"
    >
      {/* Loader for image-based thumbnails */}
      {thumbnailUrl && !imgLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="h-10 w-10 rounded-full border-4 border-white/80 border-t-transparent animate-spin"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}
            aria-label="Loading"
          />
        </div>
      )}

      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt={alt}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading={index < 6 ? 'eager' : 'lazy'}
          unoptimized
          onLoad={() => setImgLoaded(true)}
        />
      ) : (
        <VideoThumbnail
          videoUrl={videoUrl}
          alt={alt}
          className="w-full h-full"
        />
      )}

      {/* Play overlay for image thumbnails (only after loaded) */}
      {thumbnailUrl && imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/70 rounded-full p-3 shadow-lg border border-white/40">
            <Play className="h-6 w-6 text-white fill-white drop-shadow-md" />
          </div>
        </div>
      )}
    </Link>
  )
}


