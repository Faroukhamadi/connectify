import { objectType } from 'nexus';
import { User } from './User';

export const Header = objectType({
  name: 'Header',
  definition(t) {
    t.id('id');
    t.string('status');
    t.field('from_id', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.Header.findUnique({
          where: {
            id: _parent.id,
          },
        }).users();
      },
    });
    t.field('to_id', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.Header.findUnique({
          where: {
            id: _parent.id,
          },
        }).users();
      },
    });
  },
});
