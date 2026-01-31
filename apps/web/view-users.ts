import { prisma } from './lib/prisma'

async function viewUsers() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            createdAt: true,
            updatedAt: true,
        },
    })

    console.log('📊 Registered Users:')
    console.log('===================')
    users.forEach((user, index) => {
        console.log(`\n${index + 1}. ${user.name}`)
        console.log(`   Email: ${user.email}`)
        console.log(`   ID: ${user.id}`)
        console.log(`   Created: ${user.createdAt.toLocaleString()}`)
    })
    console.log(`\n✅ Total users: ${users.length}`)
}

viewUsers()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
