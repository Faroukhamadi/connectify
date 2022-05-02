const Main = () => {
  return (
    <div className="bg-stone-900 flex flex-col min-h-screen ">
      <h1 className="text-white font-unisansHeavyItalic text-2xl text-center mt-5">
        Messaging, <br /> made for everyone
      </h1>
      <p className="text-white text-base m-4 font-sans font-normal ">
        Connecting with your loved ones has never been easier. With Connectify,
        you&apos;ll get fast, simple and secure messaging...
      </p>
      <button className="bg-white  self-start rounded-full p-3 ml-4 px-7 py-4 font-medium text-lg">
        Sign Up for Connectify
      </button>
      <button className="bg-indigo-400 self-start rounded-full p-3 ml-4 px-7 py-4 mt-6 font-medium text-lg text-white">
        Already Have an Account ? Login
      </button>
    </div>
  );
};

export default Main;
