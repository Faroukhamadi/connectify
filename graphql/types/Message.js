import { PrismaClient } from '@prisma/client';
import { objectType, extendType } from 'nexus';
import Header from './Header';

const prisma = new PrismaClient();

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.id('id');
    t.boolean('is_from_sender');
    t.string('content');
    t.boolean('read');
    t.string('time');
    t.field('header', { type: Header });
  },
});

export const MessagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('messages', {
      type: 'Message',
      resolve(_parent, _args, _ctx) {
        return prisma.message.findMany({
          include: {
            header: {
              include: {
                from_id: true,
                to_id: true,
              },
            },
          },
        });
      },
    });
  },
});

// You create the message and then the header
// but both should be in the same query
// but first make a query to get length of header
// to use it as header_id

// HACK: Mostly(if not always) going to be created
// in nested write

// export const CreateMessageMutation = extendType({
//   type: 'Mutation',
//   definition(t) {
//     t.nonNull.field('createMessage', {
//       type: 'Message',
//       args: {},
//     });
//   },
// });
