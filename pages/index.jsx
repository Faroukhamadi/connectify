import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { useState } from 'react';
import MobileNav from '../components/MobileNav';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      {showMenu ? (
        <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
      ) : (
        <>
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
