import { intArg, stringArg, objectType, extendType, nonNull } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.id('username');
    t.string('password');
    t.string('first_name');
    t.string('last_name');
  },
});

export const Edge = objectType({
  name: 'Edge',
  definition(t) {
    t.string('cursor');
    t.field('node', { type: User });
  },
});

export const PageInfo = objectType({
  name: 'PageInfo',
  definition(t) {
    t.string('endCursor');
    t.boolean('hasNextPage');
  },
});

export const Response = objectType({
  name: 'Response',
  definition(t) {
    t.field('pageInfo', { type: PageInfo });
    t.list.field('edges', { type: Edge });
  },
});

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('users', {
      type: 'Response',
      args: {
        first: intArg(),
        after: intArg(),
      },
      async resolve(_, args, ctx) {
        let queryResults = null;

        if (args.after) {
          // check if there is a cursor as the argument
          queryResults = await ctx.prisma.user.findMany({
            take: args.first, // the number of items to return from the database
            skip: 1, // skip the cursor
            cursor: {
              id: args.after,
            },
          });
        } else {
          // if no cursor, this means that this is the first request
          // and we need to return the first items in the database
          queryResults = await ctx.prisma.user.findMany({
            take: args.first,
          });
        }
        // if the initial request returns users
        if (queryResults.length > 0) {
          // get the last element in previous result set
          const lastUserInResults = queryResults[queryResults.length - 1];
          // cursor we'll return in subsequent requests
          const myCursor = lastUserInResults.id;

          // query after the cursor to check if we have nextPage
          const secondQueryResults = await ctx.prisma.user.findMany({
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
              hasNextPage: secondQueryResults.length >= args.first, // if the number of items requested is greater than the response of the second query, we have another page
            },
            edges: queryResults.map((user) => ({
              cursor: user.id,
              node: user,
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

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: User,
      args: {
        id: intArg(),
        username: stringArg(),
      },
      resolve(_parent, args, ctx) {
        // if (!ctx.user) {
        //   throw new Error('You need to be logged in to perform this action');
        // }
        if (args.id)
          return ctx.prisma.user.findUnique({ where: { id: args.id } });
        if (args.username)
          return ctx.prisma.user.findUnique({
            where: { username: args.username },
          });
      },
    });
  },
});

export const CreateUserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createUser', {
      type: User,
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
        first_name: nonNull(stringArg()),
        last_name: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.user) {
          throw new Error('You need to be logged in to perform an action');
        }
        // TODO: PRIORITY->Remove this dumb userCount in favor of autoInc
        const userCount = await prisma.user.count();
        const newUser = {
          id: userCount + 3,
          username: args.username,
          password: args.password,
          first_name: args.first_name,
          last_name: args.last_name,
        };

        return await ctx.prisma.user.create({
          data: newUser,
        });
      },
    });
  },
});

export const CreateAuth0UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createAuth0User', {
      type: User,
      args: {
        first_name: nonNull(stringArg()),
        last_name: nonNull(stringArg()),
        username: nonNull(stringArg()),
      },
      async resolve(_parent, args, ctx) {
        if (!ctx.user) {
          throw new Error('You need to be logged in to give your credentials');
        }
        return await ctx.prisma.user.update({
          where: { username: args.username },
          data: {
            first_name: args.first_name,
            last_name: args.last_name,
          },
        });
      },
    });
  },
});
