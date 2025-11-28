import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'Ankita and Sahil wedding logo.png')
    const imageBuffer = fs.readFileSync(logoPath)
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    return new NextResponse('Not Found', { status: 404 })
  }
}

