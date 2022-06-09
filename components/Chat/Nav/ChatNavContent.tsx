import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';
import { useQuery, useLazyQuery } from '@apollo/client';
import {
  FriendsLastMessageHeaderQuery,
  RoomIdQuery,
} from '../../../graphql/query_builders';
import { useUser } from '@auth0/nextjs-auth0';
import { FC, useState } from 'react';
import { Socket } from 'socket.io-client';

interface ChatNavContentProps {
  socket: Socket;
}

const ChatNavContent: FC<ChatNavContentProps> = ({ socket }) => {
  const [currentRoom, setCurrentRoom] = useState('');
  const { user } = useUser();
  const { data, loading } = useQuery(FriendsLastMessageHeaderQuery, {
    variables: { userId: 1 },
  });
  const [getRoomId, { data: roomData }] = useLazyQuery(RoomIdQuery);

  return (
    <div className="flex flex-col gap-4">
      {/* STARTS HERE */}
      {!loading &&
        data.friends_last_message_header.map((message: any, index: number) => (
          <>
            <div
              key={index}
              onClick={async (e) => {
                const friendId = e.currentTarget.getAttribute('data-user');
                if (!friendId) {
                  return;
                }
                getRoomId({
                  variables: { userId: 1, friendId: parseInt(friendId) },
                }).then((res) => {
                  console.log(res.data.room);
                  if (!currentRoom) {
                    socket.emit('join', res.data.room.toString());
                  } else {
                    socket.emit('leave', currentRoom);
                    socket.emit('join', res.data.room.toString());
                  }
                });
              }}
              data-user={
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
