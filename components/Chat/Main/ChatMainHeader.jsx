// TODO: implement this 'Fixed' header
import Image from 'next/image';
import placeholder from '../../../public/images/placeholder.png';

const ChatMainHeader = () => {
  return (
    <div className="flex justify-between sticky top-0 bg-discord_dark p-2  border-b-[2px] border-b-white border-opacity-10">
      <div className="flex items-center gap-2 ml-3">
        <Image
          src={placeholder}
          alt="profile"
          layout="fixed"
          width={45}
          height={45}
          className="rounded-full"
        />
        <p className="text-white font-helvetica text-lg">Aous Hamadi</p>
      </div>
      <div className="flex items-center mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          transform="scale(0.60)"
          fill="white"
        >
          <path d="M37.65 41.95Q31.05 41.95 24.975 39.625Q18.9 37.3 14.225 33.175Q9.55 29.05 6.775 23.425Q4 17.8 4 11.2Q4 9 5.225 7.5Q6.45 6 8.7 6H13.35Q14.7 6 15.45 6.775Q16.2 7.55 16.5 9Q16.8 10.5 17.175 12.1Q17.55 13.7 18.05 14.95Q18.5 16 18.325 16.925Q18.15 17.85 17.3 18.7L13.4 22.5Q15.8 26 20.075 29.275Q24.35 32.55 28.4 33.75L30.7 29.1Q31.15 28.2 31.85 27.875Q32.55 27.55 33.8 27.65Q35.1 27.75 36.375 27.75Q37.65 27.75 39.25 27.65Q40.75 27.55 41.775 28.45Q42.8 29.35 43.15 31.35L43.95 35.85Q43.95 35.85 44.05 36.7Q44.05 38.8 42.325 40.375Q40.6 41.95 37.65 41.95Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          transform="scale(0.60)"
          fill="white"
        >
          <path d="M10.4 26.4Q9.4 26.4 8.7 25.7Q8 25 8 24Q8 23 8.7 22.3Q9.4 21.6 10.4 21.6Q11.4 21.6 12.1 22.3Q12.8 23 12.8 24Q12.8 25 12.1 25.7Q11.4 26.4 10.4 26.4ZM24 26.4Q23 26.4 22.3 25.7Q21.6 25 21.6 24Q21.6 23 22.3 22.3Q23 21.6 24 21.6Q25 21.6 25.7 22.3Q26.4 23 26.4 24Q26.4 25 25.7 25.7Q25 26.4 24 26.4ZM37.6 26.4Q36.6 26.4 35.9 25.7Q35.2 25 35.2 24Q35.2 23 35.9 22.3Q36.6 21.6 37.6 21.6Q38.6 21.6 39.3 22.3Q40 23 40 24Q40 25 39.3 25.7Q38.6 26.4 37.6 26.4Z" />
        </svg>
      </div>
    </div>
  );
};

export default ChatMainHeader;
