import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import MobileNav from '@/components/MobileNav';
import { ShowMenuContextProvider } from '@/components/showMenuContextManagement';
import Login from './auth/Login';
import { getSession, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { gql, useQuery } from '@apollo/client';
import ChatHome from '@/components/ChatHome';
import LoginAuth0 from '@/components/LoginAuth0';
import Admin from './admin';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'next/router';

// const AllUsersQuery = gql`
//   query allUsersQuery($first: Int, $after: String) {
//     users(first: $first, after: $after) {
//       pageInfo {
//         endCursor
//         hasNextPage
//       }
//       edges {
//         cursor
//         node {
//           id
//           username
//           password
//           first_name
//           last_name
//         }
//       }
//     }
//   }
// `;

const Home = ({ data }) => {
  const { user, isLoading } = useUser();

  // TODO: Place those somewhere else and get a better waiting state
  // const { data, loading, error, fetchMore } = useQuery(AllUsersQuery, {
  //   variables: { first: 1 },
  // });
  // if (loading) return <p>Loading...inside index</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  // const { endCursor, hasNextPage } = data.users.pageInfo;

  if (isLoading)
    return <div className="bg-discord_dark min-h-screen min-w-full"></div>;

  return (
    <ShowMenuContextProvider>
      <MobileNav />
      <Header />
      <Main />
      <Footer />
    </ShowMenuContextProvider>
  );
};

export default Home;

export async function getStaticProps() {
  const data = [
    {
      firstName: 'Farouk',
      lastName: 'Hamadi',
      age: 1,
    },
    {
      firstName: 'Farouk',
      lastName: 'Hamadi',
      age: 2,
    },
    {
      firstName: 'Farouk',
      lastName: 'Hamadi',
      age: 3,
    },
    {
      firstName: 'Farouk',
      lastName: 'Hamadi',
      age: 4,
    },
  ];
  return {
    props: {
      data,
    },
  };
}

// IMPORTANT: First Commenting Section
// <Login />

// IMPORTANT: Second Commenting Section

// IMPORTANT: The section below belongs to the Second Commenting section
/* <ul>
        {data?.users.edges.map(({ node }) => (
          <li key={node.id} className="mb-32">
            <p>username: {node.username}</p>
            <p>password: {node.password}</p>
            <p>first Name: {node.first_name}</p>
            <p>last Name: {node.last_name}</p>
          </li>
        ))}
      </ul>
      {hasNextPage ? (
        <button
          onClick={() => {
            fetchMore({
              variables: { after: endCursor },
              updateQuery: (prevResult, { fetchMoreResult }) => {
                fetchMoreResult.users.edges = [
                  ...prevResult.users.edges,
                  ...fetchMoreResult.users.edges,
                ];
                return fetchMoreResult;
              },
            });
          }}
        >
          More
        </button>
      ) : (
        <p>You ve reached the end!</p>
      )} */
