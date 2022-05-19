import ChatMain from './Chat/Main/ChatMain';
import ChatNav from './Chat/Nav/ChatNav';

const ChatHome = () => {
  return (
    <div className="max-h-screen flex">
      <ChatNav />
      <ChatMain />
    </div>
  );
};

export default ChatHome;
