import Link from 'next/link';
import LoginForm from '../../components/form/LoginForm';

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

//  <label
//         htmlFor="email"
//         className="mb-1 text-gray-300 uppercase font-bold text-sm mt-5"
//       >
//         email or phone number
//       </label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         className="min-h-[40px] text-gray-300 font-sans text-lg text bg-discord_dark indent-2 caret-white focus:outline-none"
//       />
//       <label
//         htmlFor="password"
//         className="mb-1 text-gray-300 uppercase font-bold text-sm mt-5"
//       >
//         password
//       </label>
//       <input
//         type="password"
//         name="password"
//         id="password"
//         className="min-h-[40px] text-gray-300 font-sans text-lg text bg-discord_dark indent-2 caret-white focus:outline-none"
//       />
//       <Link href="#">
//         <a className="text-sky-500 text-sm font-semibold font-sans mt-1">
//           Forgot your password?
//         </a>
//       </Link>
//       <button
//         type="button"
//         className="bg-discord my-4 py-2 rounded-sm px-10 font-medium text-white text-2xl transition-opacity hover:opacity-90 duration-150 ease-in "
//       >
//         Login
//       </button>