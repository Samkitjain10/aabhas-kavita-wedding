"use client"

import { useRouter } from 'next/navigation'
import { FloatingUploadButton } from './floating-upload-button'

interface Function {
  id: number
  name: string
}

interface FunctionPageClientProps {
  functions: Function[]
}

export function FunctionPageClient({ functions }: FunctionPageClientProps) {
  const router = useRouter()

  const handleUploadComplete = () => {
    router.refresh()
  }

  return <FloatingUploadButton functions={functions} onUploadComplete={handleUploadComplete} />
}

