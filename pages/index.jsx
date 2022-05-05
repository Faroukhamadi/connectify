import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import MobileNav from '../components/MobileNav';
import { ShowMenuContextProvider } from '../components/showMenuContextManagement';
import Login from './auth/Login';
import { useUser } from '@auth0/nextjs-auth0';

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

  return (
    // <Login />
    <ShowMenuContextProvider>
      <MobileNav />
      <Header />
      <Main />
      <Footer />
    </ShowMenuContextProvider>
  );
};

export default Home;
