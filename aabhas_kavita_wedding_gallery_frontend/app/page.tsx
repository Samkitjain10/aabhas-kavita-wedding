import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { HomePageClient } from '@/components/home-page-client'
import { HomePageContent } from '@/components/home-page-content'

async function getFunctions() {
  try {
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

    return functions
  } catch (error) {
    console.error('Error fetching functions:', error)
    return []
  }
}

export default async function HomePage() {
  const session = await getSession()
  
  if (!session) {
    redirect('/login')
  }

  const functions = await getFunctions()

  return (
    <>
      <HomePageContent functions={functions} />
      <HomePageClient functions={functions} />
    </>
  )
}
