import ChatNavHeader from './ChatNavHeader';
import ChatNavContent from './ChatNavContent';
import { FC } from 'react';

interface ChatNavProps {}

const ChatNav: FC<ChatNavProps> = () => {
  return (
    <div className="bg-discord_dark h-screen min-w-[350px] scrollbar scrollbar-thumb-discord  scrollbar-track-slate-300  overflow-y-scroll">
      <ChatNavHeader />
      <ChatNavContent chatData="hey" />
    </div>
  );
};

export default ChatNav;
