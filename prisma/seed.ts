import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const pizza = await prisma.food.create({
    data: {
      name: 'Pizza',
    },
  });
  const pasta = await prisma.food.create({
    data: {
      name: 'Pasta',
    },
  });
  const stake = await prisma.food.create({
    data: {
      name: 'Stake',
    },
  });

  console.log({ pizza, pasta, stake });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
