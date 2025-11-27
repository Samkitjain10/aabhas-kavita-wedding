import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    let functions = await prisma.function.findMany({
      orderBy: { createdAt: 'asc' },
    })

    // Ensure "Other" function exists
    let otherFunction = functions.find(f => f.name === 'Other')
    if (!otherFunction) {
      otherFunction = await prisma.function.create({
        data: {
          name: 'Other',
          description: 'Miscellaneous photos and videos',
        },
      })
      functions.push(otherFunction)
    }

    // Sort functions so "Other" appears last
    functions = functions.sort((a, b) => {
      if (a.name === 'Other') return 1
      if (b.name === 'Other') return -1
      return a.createdAt.getTime() - b.createdAt.getTime()
    })

    return NextResponse.json({ functions })
  } catch (error) {
    console.error('Error fetching functions:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

