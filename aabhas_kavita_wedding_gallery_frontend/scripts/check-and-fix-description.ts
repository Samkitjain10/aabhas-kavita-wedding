import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Check if description column exists
    const result = await prisma.$queryRaw<Array<{ Field: string; Type: string }>>`
      DESCRIBE \`Function\`
    `
    
    const hasDescription = result.some(col => col.Field === 'description')
    
    if (hasDescription) {
      console.log('Description column still exists. Dropping it...')
      await prisma.$executeRaw`ALTER TABLE \`Function\` DROP COLUMN \`description\``
      console.log('✅ Description column removed successfully')
    } else {
      console.log('✅ Description column does not exist (already removed)')
    }
    
    // Show current columns
    console.log('\nCurrent Function table columns:')
    result.forEach(col => {
      if (col.Field !== 'description') {
        console.log(`  - ${col.Field} (${col.Type})`)
      }
    })
  } catch (error: any) {
    console.error('Error:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

main()

