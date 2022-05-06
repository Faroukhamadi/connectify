export const resolvers = {
  Query: {
    users: () => {
      return [
        {
          id: 1,
          username: 'hayetprofarabe@hotmail.fr',
          password: 'password123hayet',
          first_name: 'Hayet',
          last_name: 'Mejri',
        },
        {
          id: 2,
          username: 'farouk@hotmail.fr',
          password: 'password123farouk',
          first_name: 'Farouk',
          last_name: 'Hamadi',
        },
        {
          id: 3,
          username: 'nardine@hotmail.fr',
          password: 'password123nardine',
          first_name: 'Nardine',
          last_name: 'Hamadi',
        },
      ];
    },
  },
};
