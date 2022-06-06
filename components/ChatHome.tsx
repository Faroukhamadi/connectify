import { FC, useState } from 'react';
import ChatMain from './Chat/Main/ChatMain';
import ChatNav from './Chat/Nav/ChatNav';

interface ChatHomeProps {}

const ChatHome: FC<ChatHomeProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  let propsToPass = {
    inputValue,
    messages,
    setInputValue,
    setMessages,
  };
  return (
    <div className="max-h-screen flex">
      <ChatNav {...propsToPass} />
      <ChatMain {...propsToPass} />
    </div>
  );
};

export default ChatHome;
