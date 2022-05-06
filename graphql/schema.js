const { gql } = require('apollo-server-micro');

export const typeDefs = gql`
  type User {
    id: ID
    username: String
    password: String
    first_name: String
    last_name: String
    # friendship_friendship_friendTouser: friendship[]
    # friendship_friendship_userTouser: friendship[]
    # header_header_from_idTouser: header[]
    # header_header_to_idTouser: header[]
  }

  type Query {
    users: [User]!
  }
`;
