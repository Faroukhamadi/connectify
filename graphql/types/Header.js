import { PrismaClient } from '@prisma/client';
import {
  objectType,
  extendType,
  nonNull,
  intArg,
  stringArg,
  booleanArg,
} from 'nexus';

const prisma = new PrismaClient();

export default objectType({
  name: 'Header',
  definition(t) {
    t.id('id');
    t.string('status');
    t.string('createdAt');
    t.field('from_id', { type: 'User' });
    t.field('to_id', { type: 'User' });
  },
});

export const CreateHeaderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createHeader', {
      type: 'Header',
      args: {
        senderId: nonNull(intArg()),
        receiverId: nonNull(intArg()),
        status: nonNull(stringArg()),
        content: nonNull(stringArg()),
        read: nonNull(booleanArg()),
        sentAt: nonNull(stringArg()),
        isFromSender: nonNull(booleanArg()),
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.header.create({
          data: {
            senderId: args.senderId,
            receiverId: args.receiverId,
            status: args.status,
            message: {
              create: {
                content: args.content,
                read: args.read,
                sent_at: args.sentAt,
                is_from_sender: args.isFromSender,
              },
            },
          },
        });
      },
    });
  },
});

export const HeadersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('headers', {
      type: 'Header',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.header.findMany({
          include: {
            from_id: true,
            to_id: true,
          },
        });
      },
    });
  },
});
