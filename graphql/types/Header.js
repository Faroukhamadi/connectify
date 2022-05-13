import { objectType, extendType } from 'nexus';
import { User } from './User';

export const Header = objectType({
  name: 'Header',
  definition(t) {
    t.id('id');
    t.string('status');
    t.field('from_id', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user.findUnique({
          where: { id: _parent.from_id },
        });
      },
    });
    t.field('to_id', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user.findUnique({
          where: { id: _parent.to_id },
        });
      },
    });
  },
});

export const HeadersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('headers', {
      type: 'Header',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.header.findMany();
      },
    });
  },
});
