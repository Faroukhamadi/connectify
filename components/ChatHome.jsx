import ChatMain from './Chat/Main/ChatMain';
import ChatNav from './Chat/Nav/ChatNav';

const ChatHome = () => {
  // First: Fetch the user's friends
  // Second: Fetch the last message

  return (
    <div className="max-h-screen flex">
      <ChatNav />
      <ChatMain />
    </div>
  );
};

export default ChatHome;
