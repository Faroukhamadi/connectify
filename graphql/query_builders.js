import { gql } from '@apollo/client';

export const HeadersQuery = gql`
  query Headers {
    headers {
      id
      status
      createdAt
      from_id {
        id
        username
        password
        first_name
        last_name
      }
      to_id {
        id
        username
        password
        first_name
        last_name
      }
    }
  }
`;

export const HeadersMessagesQuery = gql`
  query Headers_messages($firstId: Int!, $secondId: Int!) {
    headers_messages(firstId: $firstId, secondId: $secondId) {
      id
      is_from_sender
      content
      read
      time
      sent_at
      header {
        id
        createdAt
        status
        to_id {
          id
          username
          password
          first_name
          last_name
        }
        from_id {
          id
          username
          password
          first_name
          last_name
        }
      }
    }
  }
`;

export const LastMessageHeaderQuery = gql`
  query Last_message_header($firstId: Int!, $secondId: Int!) {
    last_message_header(firstId: $firstId, secondId: $secondId) {
      id
      is_from_sender
      content
      read
      time
      sent_at
      header {
        id
        status
        createdAt
        from_id {
          id
          username
          password
          first_name
          last_name
        }
        to_id {
          id
          username
          password
          first_name
          last_name
        }
      }
    }
  }
`;

export const MessagesQuery = gql`
  query Messages($first: Int, $after: Int) {
    messages(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          is_from_sender
          content
          read
          time
          sent_at
          header {
            id
            status
            createdAt
            from_id {
              last_name
              first_name
              password
              username
              id
            }
            to_id {
              id
              username
              password
              first_name
              last_name
            }
          }
        }
      }
    }
  }
`;

export const UserQuery = gql`
  query User($userId: Int, $username: String) {
    user(id: $userId, username: $username) {
      id
      username
      password
      first_name
      last_name
    }
  }
`;

export const UsersQuery = gql`
  query Users($first: Int, $after: Int) {
    users(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          username
          id
          password
          first_name
          last_name
        }
      }
    }
  }
`;

export const AreFriendsQuery = gql`
  query Query($userId: Int!, $friendId: Int!) {
    areFriends(userId: $userId, friendId: $friendId)
  }
`;

export const FriendsQuery = gql`
  query Query($userId: Int!, $friendId: Int!) {
    areFriends(userId: $userId, friendId: $friendId)
  }
`;

export const FriendshipsTableQuery = gql`
  query FriendshipsTable {
    friendshipsTable {
      user {
        id
        username
        password
        first_name
        last_name
      }
      friend {
        id
        username
        password
        first_name
        last_name
      }
      room_id
    }
  }
`;

export const CreateHeaderMutation = gql`
  mutation Mutation(
    $senderId: Int!
    $receiverId: Int!
    $status: String!
    $content: String!
    $read: Boolean!
    $sentAt: String!
    $isFromSender: Boolean!
  ) {
    createHeader(
      senderId: $senderId
      receiverId: $receiverId
      status: $status
      content: $content
      read: $read
      sentAt: $sentAt
      isFromSender: $isFromSender
    ) {
      id
      status
      createdAt
      from_id {
        id
        username
        password
        first_name
        last_name
      }
      to_id {
        id
        username
        password
        first_name
        last_name
      }
    }
  }
`;

export const CreateAuth0UserMutation = gql`
  mutation CreateAuth0User(
    $firstName: String!
    $lastName: String!
    $username: String!
  ) {
    createAuth0User(
      first_name: $firstName
      last_name: $lastName
      username: $username
    ) {
      id
      username
      password
      first_name
      last_name
    }
  }
`;

export const CreateUserMutation = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      username: $username
      password: $password
      first_name: $firstName
      last_name: $lastName
    ) {
      id
      username
      password
      first_name
      last_name
    }
  }
`;
