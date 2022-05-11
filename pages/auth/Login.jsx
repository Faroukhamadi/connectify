import Link from 'next/link';
import LoginForm from '../../components/Form/LoginForm';

const Login = () => {
  return (
    <div className="bg-discord_dark min-h-screen flex items-center justify-center">
      <div className="bg-zinc-700 flex flex-col px-10 py-14 rounded-md min-w-[500px] max-w-[500px] shadow-2xl">
        <h1 className="text-white text-3xl font-sourcesansRegular text-center font-bold">
          Welcome back!
        </h1>
        <p className="text-gray-300 text-sm text-center">
          Glad you care about your loved ones!
        </p>
        <LoginForm />
        <p className="text-gray-400 text-sm">
          Need an account?{' '}
          <Link href="/">
            <a className="text-sky-500 text-sm font-semibold font-sans mt-1">
              Register
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
