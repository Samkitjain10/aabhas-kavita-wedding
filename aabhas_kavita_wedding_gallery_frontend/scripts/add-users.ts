import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Adding phone numbers to database...')

  const phoneNumbers = [
    '8919330539',
    '9989594519',
    '8919321868',
    '9550333191',
  ]

  for (const phone of phoneNumbers) {
    try {
      const user = await prisma.user.upsert({
        where: { phone },
        update: {
          // Update existing user if found
          phone,
        },
        create: {
          phone,
          name: null, // You can add names later if needed
        },
      })
      console.log(`✅ Added/Updated user: ${phone}`)
    } catch (error) {
      console.error(`❌ Error adding ${phone}:`, error)
    }
  }

  console.log('✨ Done!')
}

main()
  .catch((e) => {
    console.error('Error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

