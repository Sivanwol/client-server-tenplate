import { PrismaClient,Prisma } from "@prisma/client";
const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Admin',
    email: 'sivan+admin@wolberg.pro',
    isAdmin: 1,
  }
]
const dataItems: Prisma.DataItemsCreateInput[] = [
];
async function main() {
  console.log(`Start seeding ...`)
  for (let i = 0; i<=100; i++) {
    dataItems.push({
      title: `Item Title ${i}`,
      name: `item_${i}`
    })
  }
  for (const d of dataItems) {
    const dataItem = await prisma.dataItems.create({
      data: d,
    })
    console.log(`Created data items with id: ${dataItem.id}`)
  }
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
