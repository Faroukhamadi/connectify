import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';
import { useQuery } from '@apollo/client';
import { FriendsLastMessageHeaderQuery } from '../../../graphql/query_builders';
import { useUser } from '@auth0/nextjs-auth0';
import { FC } from 'react';

interface ChatNavContentProps {
  chatData: string;
}

const ChatNavContent: FC<ChatNavContentProps> = () => {
  const { user } = useUser();
  const { data, loading, error } = useQuery(FriendsLastMessageHeaderQuery, {
    variables: { userId: 1 },
  });

  return (
    <div className="flex flex-col gap-4 ">
      {/* STARTS HERE */}
      {!loading &&
        data.friends_last_message_header.map((message: any, index: number) => (
          <>
            <div
              key={index}
              onClick={(e) => {
                const friendId = e.currentTarget.getAttribute('data-key');
              }}
              data-key={
                message.header.to_id.id != 1
                  ? `${message.header.to_id.id}`
                  : `${message.header.from_id.id}`
              }
              className={
                index === 0
                  ? 'flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer mt-40'
                  : 'flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer'
              }
            >
              <Image
                src={placeholder}
                alt="placeholder"
                layout="fixed"
                width="55"
                height="55"
                className="rounded-full"
              />
              <div className="w-[240px]">
                <p className="font-helvetica text-white text-lg">
                  {message.header.to_id.id != 1
                    ? `${message.header.to_id.first_name} ${message.header.to_id.last_name}`
                    : `${message.header.from_id.first_name} ${message.header.from_id.last_name}`}
                </p>
                <p className="font-helvetica text-gray-300 text-base">
                  {message.header.from_id.id == 1 ? 'You: ' : ''}
                  {message.content.length > 20
                    ? message.content.slice(0, 20)
                    : message.content}
                  ...
                  <span className="font-bold">&#183;</span> 3d
                </p>
              </div>
            </div>
            <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
          </>
        ))}
      {/* ENDS HERE */}
    </div>
  );
};

export default ChatNavContent;
