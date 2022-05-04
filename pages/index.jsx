import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import MobileNav from '../components/MobileNav';
import { ShowMenuContextProvider } from '../components/showMenuContextManagement';
import MobileAuth from '../pages/auth/MobileAuth';

const Home = () => {
  return (
    // <MobileAuth />
    <ShowMenuContextProvider>
      <MobileNav />
      <Header />
      <Main />
      <Footer />
    </ShowMenuContextProvider>
  );
};

export default Home;
