import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import MobileNav from '@/components/MobileNav';
import { ShowMenuContextProvider } from '@/components/showMenuContextManagement';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface HomeProps {
  data: string;
}

const Home: NextPage<HomeProps> = () => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  if (user) {
    router.push('/postlogin');
  }
  if (!user && !isLoading) {
    return (
      <ShowMenuContextProvider>
        <MobileNav />
        <Header />
        <Main />
        <Footer />
      </ShowMenuContextProvider>
    );
  } else {
    return <div className="bg-discord_dark min-h-screen min-w-full"></div>;
  }
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
