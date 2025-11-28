"use client"

import { Suspense } from 'react'
import GalleryPage from './page'

export default function GalleryPageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-[100dvh] flex items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <GalleryPage />
    </Suspense>
  )
}

