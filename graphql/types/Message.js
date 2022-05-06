import { objectType, extendType } from 'nexus';
import { Header } from './Header';

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.id('id');
    t.boolean('is_from_sender');
    t.string('content');
    t.boolean('read');
    t.string('time');
    t.field('header_id', {
      type: Header,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.message
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .header();
      },
    });
  },
});

export const MessagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('messages', {
      type: 'Message',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.message.findMany();
      },
    });
  },
});
