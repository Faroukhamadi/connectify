import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import MobileNav from '../components/MobileNav';
import { ShowMenuContextProvider } from '../components/showMenuContextManagement';
import Login from './auth/Login';
import { useUser } from '@auth0/nextjs-auth0';
import { gql, useQuery } from '@apollo/client';
import ChatHome from '../components/Chat/ChatHome';
import LoginAuth0 from './auth/LoginAuth0';
import Admin from './admin';

const AllUsersQuery = gql`
  query allUsersQuery($first: Int, $after: String) {
    users(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
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
  const { data, loading, error, fetchMore } = useQuery(AllUsersQuery, {
    variables: { first: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const { endCursor, hasNextPage } = data.users.pageInfo;

  console.log('user is: ', user.email);
  // return ;

  return user ? (
    // <ChatHome />
    <LoginAuth0 />
  ) : (
    <ShowMenuContextProvider>
      <MobileNav />
      <Header />
      <Main />
      <Footer />
    </ShowMenuContextProvider>
  );
  <ChatHome />;
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
