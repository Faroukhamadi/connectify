import { getSession, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Auth0LoginForm from '../components/Form/Auth0LoginForm';

const LoginAuth0 = () => {
  return (
    <div className="bg-discord_dark min-h-screen flex items-center justify-center">
      <div className="bg-zinc-700 flex flex-col px-10 py-14 rounded-md min-w-[500px] max-w-[500px] shadow-2xl">
        <h1 className="text-white text-3xl font-sourcesansRegular text-center font-bold">
          Welcome To Connectify!
        </h1>
        <p className="text-gray-300 text-sm text-center">
          Glad you care about your loved ones!
        </p>
        <Auth0LoginForm />
      </div>
    </div>
  );
};

export default LoginAuth0;

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/api/auth/login',
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};