import ChatMain from './Chat/Main/ChatMain';
import ChatNav from './Chat/Nav/ChatNav';

type Props = {};

const ChatHome: React.FC<Props> = () => {
  // First: Fetch the user's friends
  // Second: Fetch the last message

  // <button
  //   className="bg-blue-600 w-96 text-white"
  //   onClick={async () => {
  //     await fetch('/api/socket', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         firstName: 'input',
  //         lastName: 'hamadi',
  //         message: 'I like svelte',
  //       }),
  //     });
  //     // const response = await fetch('/api/socket');
  //     // console.log(await response.json());
  //   }}
  // >
  //   Toggle Button
  // </button>

  return (
    <div className="max-h-screen flex">
      <ChatNav />
      <ChatMain param="zez" />
    </div>
  );
};

export default ChatHome;
