import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import MobileNav from '../components/MobileNav';
import { ShowMenuContextProvider } from '../components/showMenuContextManagement';
import Login from './auth/Login';
import { getSession, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { gql, useQuery } from '@apollo/client';
import ChatHome from './chathome';
import LoginAuth0 from './loginauth0';
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

const Home = () => {
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  // if (user) {
  //   return (
  //     <div>
  //       Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
  //     </div>
  //   );
  // }

  // return <a href="/api/auth/login">Login</a>;

  const { user, isLoading } = useUser();

  // TODO: Place those somewhere else and get a better waiting state
  // const { data, loading, error, fetchMore } = useQuery(AllUsersQuery, {
  //   variables: { first: 1 },
  // });
  const router = useRouter();

  // if (loading) return <p>Loading...inside index</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  // const { endCursor, hasNextPage } = data.users.pageInfo;

  // HACK: Check if this is the first time the user logs in, if it is then redirect them
  // to the registration page, else redirect them to the chatHome

  // TODO: Handle this login redirect madness later

  if (isLoading)
    return (
      <h1 className="text-6xl text-red-700">
        LOADING IN INDEX AND EVERYONE IS SAD
      </h1>
    );

  if (user) {
    router.push('/chathome');
  } else {
    return (
      <ShowMenuContextProvider>
        <MobileNav />
        <Header />
        <Main />
        <Footer />
      </ShowMenuContextProvider>
    );
  }
};

export default Home;

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

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps(ctx) {
//     const hello = 'just';
//     const session = getSession(ctx.req, ctx.res);
//     console.log('the session is:', session);
//     const prisma = new PrismaClient();
//     const user = await prisma.user.findUnique({
//       where: {
//         username: session.user.email,
//       },
//     });

//     if (
//       !(user.first_name.length && user.last_name.length) ||
//       !(user.first_name && user.last_name)
//     ) {
//       console.log('hello1');
//       return {
//         redirect: {
//           permanent: false,
//           destination: '/loginauth0',
//         },
//         props: { hello },
//       };
//     }
//     console.log('hello2');
//     return {
//       props: { hello },
//     };
//   },
// });
