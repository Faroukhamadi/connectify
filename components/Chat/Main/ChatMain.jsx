import ChatMainContent from './ChatMainContent';
import ChatMainHeader from './ChatMainHeader';
import ChatMainFooter from './ChatMainFooter';

const ChatMain = () => {
  return (
    <div className="bg-discord_dark h-screen grow border-l-[3px] border-l-white border-opacity-5 overflow-scroll">
      <ChatMainHeader />
      <ChatMainContent />
      <ChatMainFooter />
    </div>
  );
};

export default ChatMain;
