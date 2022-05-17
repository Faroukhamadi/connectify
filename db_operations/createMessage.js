const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
  const message = await prisma.message.create({
    data: {
      header_id: null,
      is_from_sender: true,
      content: 'Hello World',
      read: true,
      sent_at: new Date(),
    },
  });
  console.log(message.id);
};

main().catch((err) => console.log(err));
