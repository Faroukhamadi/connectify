import ChatMainContent from './ChatMainContent';
import ChatMainHeader from './ChatMainHeader';
import ChatMainFooter from './ChatMainFooter';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';

type Props = {
  param: string;
};

const ChatMain: React.FC<Props> = ({}) => {
  const [inputValue, setInputValue] = useState('');
  const [dataChanged, setDataChanged] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/api/socket');
    };

    fetchData();

    Pusher.logToConsole = true;
    const pusher = new Pusher(
      process.env.NEXT_PUBLIC_PUSHER_APP_KEY ?? 'unknown',
      {
        cluster: 'eu',
      }
    );
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data: any) => {
      console.log('data: ', data);
    });
    channel.bind('pusher:subscription_succeeded', (data: any) => {
      console.log('subscription_succeeded binder');
    });

    console.log('DATA CHANGED YAYYYY');
  }, [dataChanged]);

  let propsToPass = {
    inputValue,
    messages,
    dataChanged,
    setInputValue,
    setDataChanged,
  };

  return (
    <div className="bg-discord_dark h-screen grow border-l-[3px] border-l-white border-opacity-5 overflow-scroll scrollbar scrollbar-thumb-discord scrollbar-thumb-opacity-3  scrollbar-track-slate-300">
      <ChatMainHeader />
      <ChatMainContent />
      <ChatMainFooter {...propsToPass} />
    </div>
  );
};

export default ChatMain;
