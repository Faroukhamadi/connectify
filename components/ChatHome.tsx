import { FC, useEffect, useState } from 'react';
import ChatMain from './Chat/Main/ChatMain';
import ChatNav from './Chat/Nav/ChatNav';
import { io, Socket } from 'socket.io-client';

let socket: Socket;

interface ChatHomeProps {}

const ChatHome: FC<ChatHomeProps> = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  let propsToPass = {
    inputValue,
    messages,
    setInputValue,
    setMessages,
    socket,
  };
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
    <div className="max-h-screen flex">
      <ChatNav {...propsToPass} />
      <ChatMain {...propsToPass} />
    </div>
  );
};

export default ChatHome;
