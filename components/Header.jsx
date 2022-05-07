import Image from 'next/image';
import logo from '../public/images/white_logo.png';
import Link from 'next/link';
import { useContext } from 'react';
import { showMenuContext } from '../components/showMenuContextManagement';
import { useUser } from '@auth0/nextjs-auth0';

const Header = () => {
  // TODO: If the user is logged in, show something else

  const { user } = useUser();
  const showMenuConsumer = useContext(showMenuContext);
  let width, height;

  if (typeof window !== 'undefined') {
    width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    height = window.innerHeight > 0 ? window.innerHeight : screen.height;
  }
  return (
    <>
      {!showMenuConsumer.showMenu && (
        <div className="bg-stone-900 flex justify-between items-center p-2">
          <div className="flex ml-3 items-center mt-3">
            <Image
              src={logo}
              alt="Logo"
              width={width >= 768 && width < 1024 ? 85 : 45}
              height={height >= 768 && height < 1024 ? 85 : 45}
              layout="fixed"
            />
            <h1 className="text-white font-unisansHeavyItalic text-lg md:text-2xl tracking-wider ">
              Connectify
            </h1>
          </div>
          <div className="hidden md:flex justify-end items-end gap-10 mr-6 mt-3">
            <a href="#">
              <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl ">
                contact
              </p>
            </a>
            <a href="/api/auth/login">
              <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl">
                sign in
              </p>
            </a>
            <a href="/api/auth/login">
              <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl">
                sign up
              </p>
            </a>
            <Link href="/admin">
              <a>
                <p className="text-white text-center uppercase font-sourcesansSemiBold text-xl">
                  Create User
                </p>
              </a>
            </Link>
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
