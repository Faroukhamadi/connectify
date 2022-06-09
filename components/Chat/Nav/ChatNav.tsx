import ChatNavHeader from './ChatNavHeader';
import ChatNavContent from './ChatNavContent';
import { Dispatch, FC, SetStateAction } from 'react';
import { Socket } from 'socket.io-client';

interface ChatNavProps {
  inputValue: string;
  messages: Array<string>;
  setInputValue: Dispatch<SetStateAction<string>>;
  setMessages: Dispatch<SetStateAction<string[]>>;
  socket: Socket;
}

const ChatNav: FC<ChatNavProps> = ({ socket }) => {
  return (
    <div className="bg-discord_dark h-screen min-w-[350px] scrollbar scrollbar-thumb-discord  scrollbar-track-slate-300  overflow-y-scroll">
      <ChatNavHeader />
      <ChatNavContent socket={socket} />
    </div>
  );
};

export default ChatNav;
