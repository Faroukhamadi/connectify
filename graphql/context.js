import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';
import { Claims, getSession } from '@auth0/nextjs-auth0';

export async function createContext({ req, res }) {
  const session = getSession(req, res);

  // if the user is not logged in, omit returning the user and accessToken
  if (!session) return { prisma };

  const { user, accessToken } = session;

  return {
    user,
    accessToken,
    prisma,
  };
}
