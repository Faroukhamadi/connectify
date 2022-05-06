import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import MobileNav from '../components/MobileNav';
import { ShowMenuContextProvider } from '../components/showMenuContextManagement';
import Login from './auth/Login';
import { useUser } from '@auth0/nextjs-auth0';
import { gql, useQuery } from '@apollo/client';

const allUsersQuery = gql`
  query {
    users {
      id
      username
      password
      first_name
      last_name
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

  const { data, loading, error } = useQuery(allUsersQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ShowMenuContextProvider>
      <MobileNav />
      <Header />
      <Main />
      <Footer />
      <ul>
        {data.users.map((user) => (
          <li key={user.id} className="mb-32">
            <p>username: {user.username}</p>
            <p>password: {user.password}</p>
            <p>first Name: {user.first_name}</p>
            <p>last Name: {user.last_name}</p>
          </li>
        ))}
      </ul>
    </ShowMenuContextProvider>
  );
};

export default Home;
