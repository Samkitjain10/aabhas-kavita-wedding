"use client"

import { useRouter } from 'next/navigation'
import { FloatingUploadButton } from './floating-upload-button'

interface Function {
  id: number
  name: string
}

interface HomePageClientProps {
  functions: Function[]
}

export function HomePageClient({ functions }: HomePageClientProps) {
  const router = useRouter()

  const handleUploadComplete = () => {
    router.refresh()
  }

  return <FloatingUploadButton functions={functions} onUploadComplete={handleUploadComplete} />
}

