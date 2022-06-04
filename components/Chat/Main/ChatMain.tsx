import ChatMainContent from './ChatMainContent';
import ChatMainHeader from './ChatMainHeader';
import ChatMainFooter from './ChatMainFooter';
import { FC, useState } from 'react';

interface Props {}

const ChatMain: FC<Props> = ({}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  let propsToPass = {
    inputValue,
    messages,
    setInputValue,
    setMessages,
  };

  return (
    <div className="bg-discord_dark h-screen grow border-l-[3px] border-l-white border-opacity-5 overflow-scroll scrollbar scrollbar-thumb-discord scrollbar-thumb-opacity-3  scrollbar-track-slate-300">
      <ChatMainHeader />
      <ChatMainContent messages={messages} />
      <ChatMainFooter {...propsToPass} />
    </div>
  );
};

export default ChatMain;
