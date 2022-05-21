import { objectType, extendType, nonNull, stringArg, intArg } from 'nexus';

export const Friendship = objectType({
  name: 'Friendship',
  definition(t) {
    t.field('user', {
      type: 'User',
    });
    t.field('friend', {
      type: 'User',
    });
    t.int('room_id');
  },
});

export const FriendshipsTableQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('friendshipsTable', {
      type: 'Friendship',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.friendship.findMany();
      },
    });
  },
});

export const FriendshipsTableUsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('friendshipsTable', {
      type: 'Friendship',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.friendship.findMany({
          include: {
            friend: true,
            user: true,
          },
        });
      },
    });
  },
});

export const AreFriendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('areFriends', {
      type: 'Boolean',
      args: {
        userId: nonNull(intArg()),
        friendId: nonNull(intArg()),
      },
      async resolve(_, args, ctx) {
        const result = await ctx.prisma.friendship.findFirst({
          where: {
            AND: [
              {
                OR: [
                  {
                    userId: args.userId,
                    friendId: args.friendId,
                  },
                  {
                    userId: args.friendId,
                    friendId: args.userId,
                  },
                ],
              },
              {
                NOT: {
                  room_id: null,
                },
              },
            ],
          },
        });
        return result ? true : false;
      },
    });
  },
});

export const FriendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('friends', {
      type: 'Friendship',
      args: {
        userId: nonNull(intArg()),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.friendship.findMany({
          include: {
            user: true,
            friend: true,
          },
          where: {
            AND: [
              {
                OR: [
                  {
                    userId: args.userId,
                  },
                  {
                    friendId: args.userId,
                  },
                ],
              },
              {
                NOT: {
                  room_id: null,
                },
              },
            ],
          },
        });
      },
    });
  },
});
