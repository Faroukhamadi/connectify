const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  // This works perfectly!!
  await prisma.header.create({
    data: {
      senderId: 2,
      receiverId: 1,
      status: 'received',
      message: {
        create: {
          content: 'Hello from newww write',
          read: true,
          sent_at: new Date(),
          is_from_sender: true,
        },
      },
    },
  });
};

main().catch((err) => console.log(err));
