import Image from 'next/image';
import logo from '../public/images/white_logo.png';
import { useContext } from 'react';
import { showMenuContext } from '../components/showMenuContextManagement';

const Header = () => {
  const showMenuConsumer = useContext(showMenuContext);
  return (
    <>
      {!showMenuConsumer.showMenu && (
        <div className="bg-stone-900 flex justify-between items-center ">
          <div className="flex ml-3 items-center mt-3">
            <Image
              src={logo}
              alt="Logo"
              width={45}
              height={45}
              layout="fixed"
            />
            <h1 className="text-white font-unisansHeavyItalic text-lg tracking-wider ">
              Connectify
            </h1>
          </div>
          <svg
            viewBox="0 0 100 80"
            width="30"
            height="30"
            className="fill-white mr-5"
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
