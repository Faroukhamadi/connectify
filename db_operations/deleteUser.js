const { PrismaClient } = require('@prisma/client');

const main = async () => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: 13,
    },
  });
  const updatedUser = await prisma.user.update({
    where: {
      id: 13,
    },
    data: {
      first_name: null,
      last_name: null,
    },
  });
  console.log('----------------Before Deleting-------------');
  console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
  console.log('----------------After Deleting-------------');
  console.log(
    `First Name: ${updatedUser.first_name}, Last Name: ${updatedUser.last_name}`
  );
};

main().catch((err) => console.log(err));
