import { objectType, extendType, nonNull, stringArg } from 'nexus';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

export const FriendshipsTableQuery11 = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('friendshipsTable11', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return prisma.user.findMany({
          where: {
            friendship_friendship_friendTouser: {
              some: {},
            },
          },
        });
      },
    });
  },
});

// export const AreFriendsQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.field('areFriends', {
//       type: 'Friendship',
//       args: {
//         id1: nonNull(stringArg()),
//         id2: nonNull(stringArg()),
//       },
//       async resolve(_, args, ctx) {
//         return await ctx.prisma.friendship.findUnique({
//           where: {
//             user: 8,
//           },
//         });

//         // const result2 = await ctx.prisma.friendship.findUnique({
//         //   where: {
//         //     AND: [{ user: 9 }, { friend: 8 }],
//         //   },
//         // });
//         // return result1 && result2 ? true : false;
//       },
//     });
//   },
// });
