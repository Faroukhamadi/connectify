import prisma from '../../../lib/prisma';

const handler = async (req, res) => {
  const { email, secret } = req.body;

  if (req.method !== 'POST') {
    return res.status(403).json({ message: 'Method not allowed' });
  }

  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return res.status(403).json({ message: 'You must provide the secret' });
  }

  const userCount = await prisma.user.count();

  if (email) {
    await prisma.user.create({
      data: { username: email, id: userCount + 3 },
    });
    return res.status(200).json({
      message: `User with email: ${email} has been created successfully!`,
    });
  }
};

export default handler;
