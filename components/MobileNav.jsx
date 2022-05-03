import Image from 'next/image';
import logo from '../public/images/white_logo.png';

const MobileNav = (props) => {
  return (
    <div className="bg-discord_dark min-h-screen">
      <header className="flex align-middle justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 50 50"
          width="30"
          height="30"
          stroke="white"
          strokeWidth={4}
          className="m-5"
          onClick={() => props.setShowMenu(false)}
        >
          <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z" />
        </svg>
      </header>
      <div className="flex flex-col items-center align-middle mt-16">
        <Image
          src={logo}
          alt="Logo"
          width={180}
          height={180}
          layout="fixed"
          priority
        />
        <div className="flex flex-col justify-center w-full items-center">
          <p className="text-white text-center uppercase w-52 border-t border-white/10 p-4 font-sourcesansRegular text-xl ">
            contact
          </p>
          <p className="text-white text-center uppercase w-52 border-t border-white/10 p-4 font-sourcesansRegular text-xl">
            sign in
          </p>
          <p className="text-white text-center uppercase w-52 border-t border-b border-white/10 p-4 font-sourcesansRegular text-xl">
            sign up
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
