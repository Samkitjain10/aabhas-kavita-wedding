import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create wedding functions
  const functions = [
    { name: 'Haldi', description: 'The turmeric ceremony - a pre-wedding ritual' },
    { name: 'Sangeet', description: 'Musical night celebration with family and friends' },
    { name: 'Wedding', description: 'The main wedding ceremony' },
    { name: 'Reception', description: 'Post-wedding celebration and dinner' },
  ]

  for (const func of functions) {
    await prisma.function.upsert({
      where: { name: func.name },
      update: {},
      create: func,
    })
  }

  console.log('✅ Created wedding functions')

  // Create sample users (replace with actual phone numbers)
  const users = [
    { phone: '+1234567890', name: 'Test User 1' },
    { phone: '+0987654321', name: 'Test User 2' },
  ]

  for (const user of users) {
    await prisma.user.upsert({
      where: { phone: user.phone },
      update: {},
      create: user,
    })
  }

  console.log('✅ Created sample users')
  console.log('📝 Note: Update phone numbers in seed.ts with actual numbers')
  console.log('✨ Seeding completed!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

