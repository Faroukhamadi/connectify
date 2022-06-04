import ChatMain from './Chat/Main/ChatMain';
import ChatNav from './Chat/Nav/ChatNav';

type Props = {};

const ChatHome: React.FC<Props> = () => {
  return (
    <div className="max-h-screen flex">
      <ChatNav />
      <ChatMain />
    </div>
  );
};

export default ChatHome;
