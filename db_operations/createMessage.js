const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  await prisma.message.create({
    data: {
      id: 1,
      header_id: 1,
      is_from_sender: true,
      content: 'Hello World',
      read: true,
      sent_at: new Date(),
    },
  });
};

main().catch((err) => console.log(err));
