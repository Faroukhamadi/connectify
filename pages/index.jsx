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
  const [toggleMessage, setToggleMessage] = useState(false);
  const [executed, setExecuted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!executed) {
      const fetchData = async () => {
        await fetch('/api/socket');
      };

      fetchData();

      Pusher.logToConsole = true;
      const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
        cluster: 'eu',
      });
      const channel = pusher.subscribe('my-channel');
      channel.bind('my-event', (data) => {
        console.log('data: ', data);
      });
      channel.bind('pusher:subscription_succeeded', (members) => {
        console.log('subscription_succeeded binder');
      });
    } else {
      setExecuted(true);
    }
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
        <button
          className="bg-blue-600 w-96 text-white"
          onClick={async () => {
            await fetch('/api/socket', {
              method: 'POST',
              body: JSON.stringify({
                firstName: 'farouk',
                lastName: 'hamadi',
                message: 'I like svelte',
              }),
            });
            // const response = await fetch('/api/socket');
            // console.log(await response.json());
          }}
        >
          Toggle Button
        </button>
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
