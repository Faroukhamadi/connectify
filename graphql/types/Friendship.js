import { objectType, extendType } from 'nexus';
import { User } from './User';

export const Friendship = objectType({
  name: 'Friendship',
  definition(t) {
    t.nonNull.int('room_id');
    t.nonNull.field('user', { type: User });
    t.nonNull.field('friend', { type: User });
  },
});

export const FriendshipsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.field('Friendships', {
      type: 'Friendship',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.friendship.findMany();
      },
    });
  },
});

export const FriendshipQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('Friendship', {
      type: 'Friendship',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.friendship.findUnique({
          where: {
            user: 13,
            friend: 12,
            room_id: 1,
          },
        });
      },
    });
  },
});
