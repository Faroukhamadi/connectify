import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';
import { gql } from 'apollo-server-micro';

// export const typeDefs = gql`
//   type User {
//     id: ID!
//     username: String!
//     password: String
//     first_name: String
//     last_name: String
//     # friendship_friendship_friendTouser: [ID]
//     # friendship_friendship_userTouser: [ID]
//     # header_header_from_idTouser: [ID]
//     # header_header_to_idTouser: [ID]
//   }
//   type Query {
//     users: [User]!
//   }
// `;

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts'
    ),
    schema: join(process.cwd(), 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context.js'),
  },
});
