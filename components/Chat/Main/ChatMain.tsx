import ChatMainContent from './ChatMainContent';
import ChatMainHeader from './ChatMainHeader';
import ChatMainFooter from './ChatMainFooter';
import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

interface ChatMainProps {
  inputValue: string;
  messages: Array<string>;
  setInputValue: Dispatch<SetStateAction<string>>;
  setMessages: Dispatch<SetStateAction<string[]>>;
}

const ChatMain: FC<ChatMainProps> = ({
  messages,
  inputValue,
  setMessages,
  setInputValue,
}) => {
  useEffect(() => {
    const addMessage = (message: string) =>
      setMessages((prevMessages) => [...prevMessages, message]);
    fetch('/api/socket').finally(() => {
      socket = io();

      socket.on('connect', () => {
        console.log('connect');
        socket.emit('connected...');
      });
      socket.on('chat message', addMessage);

      socket.on('disconnect', () => {
        console.log('disconnected...');
      });
    });
    () => {
      socket.off('chat message');
    };
  }, []);
  return (
    <div className="bg-discord_dark h-screen grow border-l-[3px] border-l-white border-opacity-5 overflow-scroll scrollbar scrollbar-thumb-discord scrollbar-thumb-opacity-3  scrollbar-track-slate-300">
      <ChatMainHeader />
      <ChatMainContent messages={messages} />
      <ChatMainFooter {...{ inputValue, setMessages, setInputValue, socket }} />
    </div>
  );
};

export default ChatMain;
