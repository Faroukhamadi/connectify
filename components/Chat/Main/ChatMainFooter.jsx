const ChatMainFooter = () => {
  return (
    <div className="p-3 fixed bottom-0 bg-discord_dark w-full ">
      <div className="flex gap-3 items-center bg-discord_dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          className="fill-discord cursor-pointer rounded-full"
        >
          <path d="M12 21.5Q10.025 21.5 8.288 20.75Q6.55 20 5.275 18.725Q4 17.45 3.25 15.712Q2.5 13.975 2.5 12Q2.5 10.025 3.25 8.287Q4 6.55 5.275 5.275Q6.55 4 8.288 3.25Q10.025 2.5 12 2.5Q13.975 2.5 15.713 3.25Q17.45 4 18.725 5.275Q20 6.55 20.75 8.287Q21.5 10.025 21.5 12Q21.5 13.975 20.75 15.712Q20 17.45 18.725 18.725Q17.45 20 15.713 20.75Q13.975 21.5 12 21.5ZM11.25 16.75H12.75V12.75H16.75V11.25H12.75V7.25H11.25V11.25H7.25V12.75H11.25Z" />
        </svg>
        <input
          type="text"
          className="min-w-[66%] min-h-[24px] rounded-full bg-gray-300 indent-4 outline-none text-xl font-helvetica "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          className="fill-discord mr-2 cursor-pointer rounded-full"
        >
          <path d="M3.5 19.25V13.675L10.425 12L3.5 10.325V4.75L20.7 12Z" />
        </svg>
      </div>
    </div>
  );
};

export default ChatMainFooter;

/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
  <path d="M6 40V8L44 24ZM9 35.35 36.2 24 9 12.5V20.9L21.1 24L9 27ZM9 35.35V24V12.5V20.9V27Z" />
</svg> */
