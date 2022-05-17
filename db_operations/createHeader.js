const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  await prisma.header.create({
    data: {
      id: 1,
      receiverId: 1,
      senderId: 2,
      status: 'sent',
    },
  });
};

main().catch((err) => console.log(err));
