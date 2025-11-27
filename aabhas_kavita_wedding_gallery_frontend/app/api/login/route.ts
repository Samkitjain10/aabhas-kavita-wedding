import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    if (!phone) {
      return NextResponse.json(
        { message: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Normalize phone number - remove spaces, dashes, and parentheses
    const normalizedPhone = phone.trim().replace(/[\s\-\(\)]/g, '')
    
    // Try to find user with exact phone number first
    let user = await prisma.user.findUnique({
      where: { phone: normalizedPhone },
    })

    // If not found, try with +91 prefix (India country code)
    if (!user && !normalizedPhone.startsWith('+')) {
      user = await prisma.user.findUnique({
        where: { phone: `+91${normalizedPhone}` },
      })
    }

    // If still not found, try without country code (remove +91 if present)
    if (!user && normalizedPhone.startsWith('+91')) {
      const withoutCountryCode = normalizedPhone.replace(/^\+91/, '')
      user = await prisma.user.findUnique({
        where: { phone: withoutCountryCode },
      })
    }

    // Also try removing any leading 0 (some users might enter 09413078947)
    if (!user && normalizedPhone.startsWith('0')) {
      const withoutLeadingZero = normalizedPhone.replace(/^0/, '')
      user = await prisma.user.findUnique({
        where: { phone: withoutLeadingZero },
      })
    }

    if (!user) {
      return NextResponse.json(
        { message: 'Phone number not authorized. Please contact the administrator.' },
        { status: 401 }
      )
    }

    // Create session
    await createSession(user.id, user.phone)

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        phone: user.phone,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

