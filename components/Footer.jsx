import logo from '../public/images/white_logo.png';
import Image from 'next/dist/client/image';

const Footer = () => {
  return (
    <div className="bg-discord_dark min-h-[300px] flex flex-col items-center justify-start">
      <button className="flex items-center mt-7 bg-discord rounded-full py-2 px-10 font-medium text-lg text-white transition-colors hover:bg-indigo-500 duration-150 ease-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
          fill="white"
        >
          <path d="M20 26.125 13.208 19.292 14.625 17.917 19 22.292V7.417H21V22.292L25.417 17.917L26.833 19.292ZM10.167 32.208Q9.167 32.208 8.417 31.479Q7.667 30.75 7.667 29.708V24.792H9.667V29.708Q9.667 29.917 9.833 30.062Q10 30.208 10.167 30.208H29.833Q30 30.208 30.167 30.062Q30.333 29.917 30.333 29.708V24.792H32.333V29.708Q32.333 30.75 31.583 31.479Q30.833 32.208 29.833 32.208Z" />
        </svg>
        <p>Download from App Store</p>
      </button>
      <div className="w-72 border-t-2 border-white opacity-5 my-6"></div>
      <div className="flex ml-3 items-center">
        <Image src={logo} alt="Logo" width={60} height={60} layout="fixed" />
        <h1 className="text-slate-200 font-unisansHeavyItalic text-2xl mr-4 tracking-wider ">
          Connectify
        </h1>
      </div>
      <p className="text-gray-400 font-sourcesansRegular mb-3 text-sm">
        PRIVACY POLICY
      </p>
      <p className="text-gray-400 font-sourcesansRegular mb-3 text-sm">
        TERMS AND CONDITIONS
      </p>
      <p className="text-gray-400 font-sourcesansRegular mb-3 text-sm">
        CONTACT
      </p>
      <p className="text-gray-300 mt-7 mb-20 font-sourcesansExtraLight font-thin text-sm">
        © 2022 Farouk Development, LLC All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
