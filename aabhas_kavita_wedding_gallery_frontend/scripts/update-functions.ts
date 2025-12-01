import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const functions = [
  { name: 'Hath Daan', priority: 1 },
  { name: 'Vinayak Sthapna', priority: 2 },
  { name: 'Haldi', priority: 3 },
  { name: 'Engagenemt', priority: 4 },
  { name: 'Sangeet', priority: 5 },
  { name: 'Mayra', priority: 6 },
  { name: 'Phere', priority: 7 },
  { name: 'Reception', priority: 8 },
  { name: 'Others', priority: 9 },
]

async function main() {
  console.log('Updating functions in database...\n')

  for (const func of functions) {
    try {
      // Try to find existing function by name
      const existing = await prisma.function.findUnique({
        where: { name: func.name },
      })

      if (existing) {
        // Update existing function with new priority
        await prisma.function.update({
          where: { id: existing.id },
          data: { priority: func.priority },
        })
        console.log(`✅ Updated: ${func.name} (Priority: ${func.priority})`)
      } else {
        // Create new function if it doesn't exist
        await prisma.function.create({
          data: {
            name: func.name,
            priority: func.priority,
          },
        })
        console.log(`✅ Created: ${func.name} (Priority: ${func.priority})`)
      }
    } catch (error: any) {
      console.error(`❌ Error processing ${func.name}:`, error.message)
    }
  }

  // Handle old functions that need to be renamed or merged
  const existingFunctions = await prisma.function.findMany()
  const newFunctionNames = functions.map(f => f.name)
  
  // Rename "Other" to "Others" if it exists
  const oldOther = existingFunctions.find(f => f.name === 'Other')
  if (oldOther) {
    const othersFunction = await prisma.function.findUnique({
      where: { name: 'Others' },
    })
    
    if (othersFunction) {
      // Move media from "Other" to "Others"
      const mediaCount = await prisma.media.count({
        where: { functionId: oldOther.id },
      })
      
      if (mediaCount > 0) {
        await prisma.media.updateMany({
          where: { functionId: oldOther.id },
          data: { functionId: othersFunction.id },
        })
        console.log(`📦 Moved ${mediaCount} media items from "Other" to "Others"`)
      }
      
      // Delete old "Other" function
      await prisma.function.delete({
        where: { id: oldOther.id },
      })
      console.log(`🔄 Renamed: "Other" → "Others"`)
    } else {
      // Just rename it
      await prisma.function.update({
        where: { id: oldOther.id },
        data: { name: 'Others', priority: 9 },
      })
      console.log(`🔄 Renamed: "Other" → "Others"`)
    }
  }

  // Delete functions that are not in the new list (only if they have no media)
  const functionsToDelete = existingFunctions.filter(
    f => !newFunctionNames.includes(f.name) && f.name !== 'Other'
  )

  for (const funcToDelete of functionsToDelete) {
    try {
      // Check if function has media
      const mediaCount = await prisma.media.count({
        where: { functionId: funcToDelete.id },
      })

      if (mediaCount > 0) {
        console.log(`⚠️  Skipping deletion of "${funcToDelete.name}" - has ${mediaCount} media items`)
      } else {
        await prisma.function.delete({
          where: { id: funcToDelete.id },
        })
        console.log(`🗑️  Deleted: ${funcToDelete.name}`)
      }
    } catch (error: any) {
      console.error(`❌ Error deleting ${funcToDelete.name}:`, error.message)
    }
  }

  console.log('\n✨ Done!')
  
  // Show final list
  const finalFunctions = await prisma.function.findMany({
    orderBy: { priority: 'asc' },
  })
  console.log('\nFinal functions list:')
  finalFunctions.forEach(f => {
    console.log(`  ${f.priority}. ${f.name}`)
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

