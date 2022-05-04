import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import MobileNav from '../components/MobileNav';
import { ShowMenuContextProvider } from '../components/showMenuContextManagement';
import Login from './auth/Login';

const Home = () => {
  return (
    <Login />
    // <ShowMenuContextProvider>
    //   <MobileNav />
    //   <Header />
    //   <Main />
    //   <Footer />
    // </ShowMenuContextProvider>
  );
};

export default Home;
