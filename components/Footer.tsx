import logo from '@/public/images/white_logo.png';
import Image from 'next/dist/client/image';
import useWindowDimensions from '@/hooks/windowDimension';
import downloadBtnText from '@/lib/downloadBtnText';
import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const { width } = useWindowDimensions();
  let imageWidth, imageHeight;

  if (typeof imageWidth != 'undefined') {
    imageWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    imageHeight = window.innerHeight > 0 ? window.innerHeight : screen.height;
  }
  return (
    <div className="bg-discord_dark min-h-[300px] flex flex-col items-center justify-start">
      <button className="bg-discord flex items-center rounded-full p-3 ml-4 px-7 py-4 md:px-14  md:py-7 xl:py-6 mt-6 font-medium text-lg text-white md:text-3xl transition-colors hover:bg-indigo-500 duration-150 ease-in md:mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
          fill="white"
        >
          <path d="M20 26.125 13.208 19.292 14.625 17.917 19 22.292V7.417H21V22.292L25.417 17.917L26.833 19.292ZM10.167 32.208Q9.167 32.208 8.417 31.479Q7.667 30.75 7.667 29.708V24.792H9.667V29.708Q9.667 29.917 9.833 30.062Q10 30.208 10.167 30.208H29.833Q30 30.208 30.167 30.062Q30.333 29.917 30.333 29.708V24.792H32.333V29.708Q32.333 30.75 31.583 31.479Q30.833 32.208 29.833 32.208Z" />
        </svg>
        <p>{downloadBtnText(width)}</p>
      </button>
      <div className="w-72 border-t-2 border-white opacity-5 my-6"></div>
      <div className="flex ml-3 items-center">
        <Image
          src={logo}
          alt="Logo"
          width={imageWidth && imageWidth >= 768 && imageWidth < 1024 ? 85 : 60}
          height={
            imageHeight && imageHeight >= 768 && imageHeight < 1024 ? 85 : 60
          }
          layout="fixed"
        />
        <h1 className="text-white font-unisansHeavyItalic text-lg md:text-2xl tracking-wider">
          Connectify
        </h1>
      </div>
      <div className="hidden md:flex md:gap-10 md:mt-6">
        <p className="text-gray-400 font-sourcesansRegular mb-3 text-sm md:text-lg xl:cursor-pointer">
          PRIVACY POLICY
        </p>
        <p className="text-gray-400 font-sourcesansRegular mb-3 text-sm md:text-lg xl:cursor-pointer">
          TERMS AND CONDITIONS
        </p>
        <p className="text-gray-400 font-sourcesansRegular mb-3 text-sm md:text-lg xl:cursor-pointer">
          CONTACT
        </p>
      </div>
      <p className="text-gray-300 mt-7 mb-20 font-sourcesansExtraLight font-thin text-sm md:text-base">
        © 2022 Farouk Development, LLC All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
