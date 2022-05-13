import { objectType, extendType } from 'nexus';

export const Friendship = objectType({
  name: 'Friendship',
  definition(t) {
    t.id('user');
    t.id('friend');
    t.int('room_id');
  },
});

export const FriendshipsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('friendships', {
      type: 'Friendship',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.friendship.findMany();
      },
    });
  },
});
