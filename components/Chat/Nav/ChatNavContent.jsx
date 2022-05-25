import Image from 'next/image';
import placeholder from '@/public/images/placeholder.png';
import { useQuery } from '@apollo/client';
import { FriendsLastMessageHeaderQuery } from '../../../graphql/query_builders';
import { useUser } from '@auth0/nextjs-auth0';
const ChatNavContent = () => {
  const { user } = useUser();
  const { data, loading, error } = useQuery(FriendsLastMessageHeaderQuery, {
    variables: { userId: 1 },
  });

  // if (!loading)
  //   return (
  //     <div className="text-white mt-72">
  //       <p>{data.friends_last_message_header[0].id}</p>
  //       <p>{String(data.friends_last_message_header[0].is_from_sender)}</p>
  //       <p>{data.friends_last_message_header[0].content}</p>
  //       <p>{String(data.friends_last_message_header[0].read)}</p>
  //     </div>
  //   );

  // !loading && console.log(data.friends_last_message_header[1].header.to_id);

  !loading &&
    data.friends_last_message_header.forEach((message, i) => {
      console.log(i, message.header.to_id.id);
    });

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer mt-40">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      {/* STARTS HERE */}
      {!loading &&
        data.friends_last_message_header.map((message) => (
          <>
            <div
              key={message.id}
              className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer"
            >
              <Image
                src={placeholder}
                alt="placeholder"
                layout="fixed"
                width="55"
                height="55"
                className="rounded-full"
              />
              <div>
                <p className="font-helvetica text-white text-lg">
                  {/* {message.header.to_id} */}
                  {message.header.to_id.id !== user.id
                    ? `${message.header.to_id.first_name} ${message.header.to_id.last_name}`
                    : `${message.header.from_id.first_name} ${message.header.from_id.last_name}`}
                </p>
                <p className="font-helvetica text-gray-300 text-base">
                  You: Hello there how are you{' '}
                  <span className="font-bold">&#183;</span> 3d
                </p>
              </div>
            </div>
            <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
          </>
        ))}
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      {/* ENDS HERE */}
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
      <div className="w-80 border-t-2 border-white opacity-5 mx-auto"></div>
      <div className="flex gap-3 justify-center hover:bg-discord hover:bg-opacity-20 py-4 cursor-pointer">
        <Image
          src={placeholder}
          alt="placeholder"
          layout="fixed"
          width="55"
          height="55"
          className="rounded-full"
        />
        <div>
          <p className="font-helvetica text-white text-lg">Aous Hamadi</p>
          <p className="font-helvetica text-gray-300 text-base">
            You: Hello there how are you{' '}
            <span className="font-bold">&#183;</span> 3d
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatNavContent;
