"use client"

import { Suspense } from 'react'
import GalleryPageContent from './page-content'

export default function GalleryPageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-[100dvh] flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <GalleryPageContent />
    </Suspense>
  )
}

