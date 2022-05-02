import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-stone-900 flex justify-between items-center ">
      <div className="flex ml-3 items-center mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className="fill-white"
        >
          <path d="M12 28.05H27.65V25.05H12ZM12 21.55H36V18.55H12ZM12 15.05H36V12.05H12ZM4 44V7Q4 5.85 4.9 4.925Q5.8 4 7 4H41Q42.15 4 43.075 4.925Q44 5.85 44 7V33Q44 34.15 43.075 35.075Q42.15 36 41 36H12ZM7 36.75 10.75 33H41Q41 33 41 33Q41 33 41 33V7Q41 7 41 7Q41 7 41 7H7Q7 7 7 7Q7 7 7 7ZM7 7Q7 7 7 7Q7 7 7 7Q7 7 7 7Q7 7 7 7V33Q7 33 7 33Q7 33 7 33V36.75Z" />
        </svg>
        <h1 className="text-white font-unisansHeavyItalic text-lg tracking-wider ml-2">
          Connectify
        </h1>
      </div>
      <svg
        viewBox="0 0 100 80"
        width="30"
        height="30"
        className="fill-white mr-5"
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>
    </div>
  );
};

export default Header;
