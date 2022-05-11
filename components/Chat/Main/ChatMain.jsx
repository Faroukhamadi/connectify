import ChatMainContent from './ChatMainContent';
import ChatMainHeader from './ChatMainHeader';
import ChatMainFooter from './ChatMainFooter';

const ChatMain = () => {
  return (
    <div className="bg-pink-400 h-screen grow">
      <ChatMainHeader />
      <ChatMainContent />
      <ChatMainFooter />
    </div>
  );
};

export default ChatMain;
