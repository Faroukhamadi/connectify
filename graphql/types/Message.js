import { PrismaClient } from '@prisma/client';
import { objectType, extendType, intArg, nonNull, arg, list } from 'nexus';
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
    t.string('sent_at');
    t.field('header', { type: Header });
  },
});

export const MessageEdge = objectType({
  name: 'MessageEdge',
  definition(t) {
    t.string('cursor');
    t.field('node', { type: Message });
  },
});

export const MessagePageInfo = objectType({
  name: 'MessagePageInfo',
  definition(t) {
    t.string('endCursor');
    t.boolean('hasNextPage');
  },
});

export const MessageResponse = objectType({
  name: 'MessageResponse',
  definition(t) {
    t.field('pageInfo', { type: MessagePageInfo });
    t.list.field('edges', { type: MessageEdge });
  },
});

// FIXME: hasNextPage false for last pages
export const MessagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('messages', {
      type: 'MessageResponse',
      args: {
        first: intArg(),
        after: intArg(),
      },
      async resolve(_, args, ctx) {
        let queryResults = null;

        if (args.after) {
          // check if there is a cursor as the argument
          queryResults = await prisma.message.findMany({
            take: args.first, // the number of items to return from the database
            skip: 1, // skip the cursor
            cursor: {
              id: args.after,
            },
            include: {
              header: {
                include: {
                  from_id: true,
                  to_id: true,
                },
              },
            },
          });
        } else {
          // if no cursor, this means that this is the first request
          // and we need to return the first items in the database
          queryResults = await prisma.message.findMany({
            take: args.first,
            include: {
              header: {
                include: {
                  from_id: true,
                  to_id: true,
                },
              },
            },
          });
        }
        // if the initial request returns messages
        if (queryResults.length) {
          // get the last element in previous result set
          const lastMessageInResults = queryResults[queryResults.length - 1];
          // cursor we'll return in subsequent requests
          const myCursor = lastMessageInResults.id;

          // query after the cursor to check if we have nextPage
          const secondQueryResults = await prisma.message.findMany({
            take: args.first,
            cursor: {
              id: myCursor,
            },
            orderBy: {
              id: 'asc',
            },
          });

          // return response
          const result = {
            pageInfo: {
              endCursor: myCursor,
              hasNextPage: secondQueryResults.length >= args.first,
            },
            edges: queryResults.map((message) => ({
              cursor: message.id,
              node: message,
            })),
          };
          return result;
        }

        return {
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
          },
          edges: [],
        };
      },
    });
  },
});

export const HeadersMessagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('headers_messages', {
      type: 'Message',
      args: {
        firstId: nonNull(intArg()),
        secondId: nonNull(intArg()),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.message.findMany({
          include: {
            header: {
              include: {
                from_id: true,
                to_id: true,
              },
            },
          },
          orderBy: {
            sent_at: 'desc',
          },
          where: {
            OR: [
              {
                header: {
                  senderId: args.firstId,
                  receiverId: args.secondId,
                },
              },
              {
                header: {
                  senderId: args.secondId,
                  receiverId: args.firstId,
                },
              },
            ],
          },
        });
      },
    });
  },
});

// HACK: So the idea is, we get the ids of friends and then pass them down as arguments to the LastMessageQuery
export const LastMessageHeaderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('last_message_header', {
      type: 'Message',
      args: {
        firstId: nonNull(intArg()),
        secondId: nonNull(intArg()),
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.message.findMany({
          include: {
            header: {
              include: {
                from_id: true,
                to_id: true,
              },
            },
          },
          orderBy: {
            sent_at: 'desc',
          },
          take: 1,
          where: {
            OR: [
              {
                header: {
                  senderId: args.firstId,
                  receiverId: args.secondId,
                },
              },
              {
                header: {
                  senderId: args.secondId,
                  receiverId: args.firstId,
                },
              },
            ],
          },
        });
      },
    });
  },
});

// TODO: optimize this mess, this is the next thing I have to fetch in
// front end
export const FriendsLastMessageHeaderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.nonNull.field('friends_last_message_header', {
      type: 'Message',
      args: {
        userId: intArg(),
      },
      async resolve(_parent, args, _ctx) {
        const friends = await prisma.friendship.findMany({
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
        let friendIds = [];
        friends.forEach(async (friend) => {
          if (friend.friendId === args.userId) {
            friendIds.push(friend.userId);
          } else {
            friendIds.push(friend.friendId);
          }
        });
        let mostRecentMessages = [];
        for (const friendId of friendIds) {
          let message = await prisma.message.findMany({
            include: {
              header: {
                include: {
                  from_id: true,
                  to_id: true,
                },
              },
            },
            orderBy: {
              header: {
                createdAt: 'desc',
              },
            },
            take: 1,
            where: {
              OR: [
                {
                  header: {
                    senderId: args.userId,
                    receiverId: friendId,
                  },
                },
                {
                  header: {
                    senderId: friendId,
                    receiverId: args.userId,
                  },
                },
              ],
            },
          });
          mostRecentMessages.push(...message);
        }
        return mostRecentMessages;
      },
    });
  },
});
