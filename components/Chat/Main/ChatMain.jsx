import ChatMainContent from './ChatMainContent';
import ChatMainHeader from './ChatMainHeader';
import ChatMainFooter from './ChatMainFooter';

const ChatMain = () => {
  return (
    <div className="bg-discord_dark h-screen grow border-l-4 border-l-white border-opacity-10">
      <ChatMainHeader />
      <ChatMainContent />
      <ChatMainFooter />
    </div>
  );
};

export default ChatMain;
