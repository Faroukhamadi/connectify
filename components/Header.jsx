import Image from 'next/image';
import logo from '../public/images/white_logo.png';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { showMenuContext } from '../components/showMenuContextManagement';
import { useUser } from '@auth0/nextjs-auth0';
import useWindowDimensions from '../hooks/windowDimension';
import headerImageSize from '../lib/headerImageSize';

const Header = () => {
  const { width } = useWindowDimensions();
  const [imageSize, setImageSize] = useState(0);

  useEffect(() => {
    setImageSize(headerImageSize(width));
  }, []);

  const { user } = useUser();
  const showMenuConsumer = useContext(showMenuContext);

  return (
    <>
      {!showMenuConsumer.showMenu && (
        <div className="bg-stone-900 flex justify-between items-center p-2">
          <div className="flex ml-3 items-center mt-3 lg:mx-28">
            <Image
              src={logo}
              alt="Logo"
              width={imageSize}
              height={imageSize}
              layout="fixed"
              priority
            />
            <h1 className="text-white font-unisansHeavyItalic text-lg md:text-2xl xl:text-4xl tracking-wider ">
              Connectify
            </h1>
          </div>
          <div className="hidden md:flex justify-end items-end gap-10 mr-6 mt-3 lg:mx-28">
            <a href="#">
              <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl xl:text-2xl">
                contact
              </p>
            </a>
            <a href={width < 1280 ? '/auth/MobileAuth' : '/api/auth/login'}>
              <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl xl:text-2xl">
                sign in
              </p>
            </a>
            <a href={width < 1280 ? '/auth/MobileAuth' : '/api/auth/login'}>
              <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl xl:text-2xl">
                sign up
              </p>
            </a>
            {/* <Link href="/admin">
              <a>
                <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl">
                  Create User
                </p>
              </a>
            </Link> */}
          </div>
          <svg
            viewBox="0 0 100 80"
            width="30"
            height="30"
            className="fill-white mr-5 md:hidden"
            onClick={() => {
              showMenuConsumer.toggleMenu(true);
            }}
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      )}
    </>
  );
};

export default Header;
