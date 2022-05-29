import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import MobileNav from '@/components/MobileNav';
import { ShowMenuContextProvider } from '@/components/showMenuContextManagement';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';

const Home = ({ data }) => {
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    // TODO: fix event getting emitted when I hit the endpoint
    const fetchData = async () => {
      const res = await fetch('/api/socket');
      console.log('res: ', res.body);
    };

    fetchData();

    Pusher.logToConsole = true;
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      alert(data.message);
    });
  }, []);

  if (isLoading) {
    console.log('We are here 1');
    return <div className="bg-discord_dark min-h-screen min-w-full"></div>;
  }
  if (user) {
    router.push('/postlogin');
  }
  if (error) {
    return <h1>Error</h1>;
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
