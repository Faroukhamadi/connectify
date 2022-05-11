import ChatMain from './Main/ChatMain';
import ChatNav from './Nav/ChatNav';

const ChatHome = () => {
  return (
    <div className="max-h-screen flex">
      <ChatNav />
      <ChatMain />
    </div>
  );
};

export default ChatHome;
