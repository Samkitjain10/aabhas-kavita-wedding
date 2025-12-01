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
      select: {
        id: true,
        name: true,
        priority: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { priority: 'asc' },
    })

    // Ensure "Others" function exists
    let othersFunction = functions.find(f => f.name === 'Others')
    if (!othersFunction) {
      othersFunction = await prisma.function.create({
        data: {
          name: 'Others',
          priority: 9,
        },
      })
      functions.push(othersFunction)
    }

    // Sort functions by priority (Others should be last)
    functions = functions.sort((a, b) => {
      // If priority is 0 (old functions without priority), put them at the end
      if (a.priority === 0 && b.priority !== 0) return 1
      if (b.priority === 0 && a.priority !== 0) return -1
      return a.priority - b.priority
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

