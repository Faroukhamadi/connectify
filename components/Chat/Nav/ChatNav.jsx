import ChatNavHeader from './ChatNavHeader';
import ChatNavContent from './ChatNavContent';

const ChatNav = () => {
  return (
    <div className="bg-discord_dark h-screen min-w-[350px]">
      <ChatNavHeader />
      <ChatNavContent />
    </div>
  );
};

export default ChatNav;
