import useWindowDimensions from '@/hooks/windowDimension';

const Main = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="bg-stone-900 flex flex-col min-h-screen ">
      <h1 className="text-white font-unisansHeavyItalic text-2xl md:text-5xl md:mt-14 text-center mt-5 xl:text-7xl">
        Messaging, <br /> made for everyone
      </h1>
      <p className="text-white text-base md:text-3xl m-4 font-sans font-normal xl:text-4xl xl:font-sourcesansRegular xl:text-center xl:mt-10 xl:mx-24">
        Connecting with your loved ones has never been easier. With Connectify,
        you&apos;ll get fast, simple and secure messaging...
      </p>
      <div className="flex flex-col xl:flex-row xl:justify-evenly xl:mt-14">
        <a href={width < 1280 ? '/auth/MobileAuth' : '/api/auth/login'}>
          <button className="bg-white self-start rounded-full ml-4 px-7 py-4  md:px-14 md:py-7 font-medium text-lg md:text-3xl transition-all hover:text-discord duration-150 ease-in shadow-sm hover:shadow-discord md:mt-7">
            Sign Up for Connectify
          </button>
        </a>
        <a href={width < 1280 ? '/auth/MobileAuth' : '/api/auth/login'}>
          <button className="bg-discord self-start rounded-full p-3 ml-4 px-7 py-4 md:px-14 md:py-7 mt-6 font-medium text-lg text-white md:text-3xl transition-colors hover:bg-indigo-500 duration-150 ease-in">
            Already Have an Account ? Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Main;
