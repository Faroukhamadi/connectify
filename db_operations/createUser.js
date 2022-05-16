const { PrismaClient } = require('@prisma/client');
const { faker, FakerError } = require('@faker-js/faker');

const prisma = new PrismaClient();

const main = async () => {
  for (let i = 0; i < 10; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let username = faker.internet.email(firstName, lastName);
    let password = faker.internet.password(7);
    await prisma.user.create({
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password,
      },
    });
  }
};

main().catch((err) => console.log(err));
