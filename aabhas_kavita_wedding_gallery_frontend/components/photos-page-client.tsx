"use client"

import { useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PhotosGrid } from './photos-grid'

interface Photo {
  id: number
  url: string
  originalUrl?: string
  fileName: string
}

interface PhotosPageClientProps {
  functionId: number
  photos: Photo[]
}

export function PhotosPageClient({ functionId, photos }: PhotosPageClientProps) {
  const [isSelectionMode, setIsSelectionMode] = useState(false)

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div></div>
        <Button
          onClick={() => setIsSelectionMode(!isSelectionMode)}
          className={`rounded-full px-6 py-2.5 transition-all ${
            isSelectionMode
              ? 'bg-[#D4AF37] hover:bg-[#B8941F] text-white'
              : 'bg-white/90 hover:bg-white text-gray-700 border border-gray-200'
          }`}
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          <Download className="h-4 w-4 mr-2" />
          <span className="font-semibold">
            {isSelectionMode ? 'Cancel Selection' : 'Download Multiple'}
          </span>
        </Button>
      </div>

      <div className="mb-12 md:mb-0">
        <PhotosGrid 
          functionId={functionId}
          photos={photos}
          isSelectionMode={isSelectionMode}
          onSelectionModeChange={setIsSelectionMode}
        />
      </div>
    </>
  )
}

