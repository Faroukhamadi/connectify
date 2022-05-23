import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';
import { useLazyQuery } from '@apollo/client';
import { UsersQuery } from '@/components/../graphql/query_builders';
import { useEffect, useState } from 'react';

const ChatNavHeader = () => {
  // This won't scale when you have many users
  const [loadUsers, { called, loading, data }] = useLazyQuery(UsersQuery);
  const [toggleUsers, setToggleUsers] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col fixed bg-discord_dark z-50 min-w-[350px] top-0">
      <div className="flex justify-between items-center mt-3 mx-2">
        <Image
          src={placeholder}
          alt="profile"
          layout="fixed"
          width={37}
          height={37}
          className="rounded-full"
        />
        <p className="text-white font-helvetica text-xl ">Chats</p>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            className="fill-discord scale-75 cursor-pointer hover:bg-gray-900 rounded-full"
          >
            <path d="M8.458 34.167Q7.375 34.167 6.604 33.396Q5.833 32.625 5.833 31.542V8.458Q5.833 7.375 6.604 6.604Q7.375 5.833 8.458 5.833H31.542Q32.625 5.833 33.396 6.604Q34.167 7.375 34.167 8.458V31.542Q34.167 32.625 33.396 33.396Q32.625 34.167 31.542 34.167ZM8.458 32.083H31.542Q31.792 32.083 31.937 31.938Q32.083 31.792 32.083 31.542V26.417H26.042Q25.042 28.042 23.438 28.938Q21.833 29.833 20 29.833Q18.167 29.833 16.562 28.938Q14.958 28.042 13.958 26.417H7.917V31.542Q7.917 31.792 8.062 31.938Q8.208 32.083 8.458 32.083ZM20 27.708Q21.625 27.708 22.958 26.771Q24.292 25.833 25.042 24.333H32.083V8.458Q32.083 8.208 31.937 8.063Q31.792 7.917 31.542 7.917H8.458Q8.208 7.917 8.062 8.063Q7.917 8.208 7.917 8.458V24.333H14.958Q15.708 25.833 17.042 26.771Q18.375 27.708 20 27.708ZM20 22.292 14.042 16.375 15.542 14.875 18.958 18.25V10.417H21.042V18.25L24.458 14.875L25.958 16.375ZM8.458 32.083Q8.208 32.083 8.062 32.083Q7.917 32.083 7.917 32.083H13.958Q14.958 32.083 16.562 32.083Q18.167 32.083 20 32.083Q21.833 32.083 23.438 32.083Q25.042 32.083 26.042 32.083H32.083Q32.083 32.083 31.937 32.083Q31.792 32.083 31.542 32.083Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            className="fill-discord scale-75 cursor-pointer hover:bg-gray-900 rounded-full"
          >
            <path d="M32.417 31.25V24.708Q32.417 22.375 30.771 20.729Q29.125 19.083 26.792 19.083H9.5L16.125 25.708L14.625 27.208L5.5 18.042L14.625 8.917L16.125 10.375L9.5 17H26.792Q29.958 17 32.229 19.25Q34.5 21.5 34.5 24.708V31.25Z" />
          </svg>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <input
          type="text"
          className="min-w-[95%] min-h-[40px] rounded-full font-helvetica bg-di bg-search bg-no-repeat bg-scroll bg-contain bg-[7px_center] indent-14 outline-none text-xl placeholder:text-gray-500 placeholder:font-helvetica placeholder:text-xl"
          placeholder="Search Connectify"
          onFocus={() => {
            setToggleUsers(true);
            loadUsers();
          }}
          onBlur={() => {
            setToggleUsers(false);
            loadUsers();
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 my-6 mx-auto"></div>
      <ul>
        {data &&
          toggleUsers &&
          data.users.edges
            .filter((user) => {
              if (query === '') {
                console.log('first', user.node);
                return user.node;
              } else if (
                user.node.first_name.toLowerCase().includes(query.toLowerCase())
              ) {
                console.log('second', user.node);
                return user.node;
              }
            })
            .map((user) => <li key={user.node.id}>{user.node.first_name}</li>)}
      </ul>
    </div>
  );
};

export default ChatNavHeader;
