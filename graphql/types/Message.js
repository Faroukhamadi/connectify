import { objectType } from 'nexus';
import { Header } from './Header';

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.id('id');
    t.boolean('is_from_sender');
    t.string('content');
    t.boolean('read');
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

// id, header_id, is_from_sender, content, read, sent_at
