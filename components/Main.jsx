const Main = () => {
  return (
    <div className="bg-discord_dark flex flex-col min-h-screen ">
      <h1 className="text-white font-unisansHeavyItalic text-2xl text-center mt-5">
        Messaging, <br /> made for everyone
      </h1>
      <p className="text-white text-base m-4 font-sans font-normal ">
        Connecting with your loved ones has never been easier. With Connectify,
        you&apos;ll get fast, simple and secure messaging...
      </p>
      <button className="bg-white self-start rounded-full p-3 ml-4 px-7 py-4 font-medium text-lg transition-all hover:text-discord duration-150 ease-in shadow-sm hover:shadow-discord">
        Sign Up for Connectify
      </button>
      <button className="bg-discord self-start rounded-full p-3 ml-4 px-7 py-4 mt-6 font-medium text-lg text-white transition-colors hover:bg-indigo-500 duration-150 ease-in">
        Already Have an Account ? Login
      </button>
    </div>
  );
};

export default Main;
