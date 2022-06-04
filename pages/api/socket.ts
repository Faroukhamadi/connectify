import { NextConfig } from 'next';
import { Server } from 'socket.io';

const handler = (_: any, res: any) => {
  // here
  if (!res.socket.server.io) {
    console.log('Starting socket.io');
    res.socket.server.io;
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      socket.broadcast.emit('a user connected');

      // joining a room on event sent from client side
      socket.on('join', async (room: string) => {
        console.log('joined room', room);
        await socket.join(room);
        console.log('keys: ', io.sockets.adapter.rooms['keys']());
        console.log('values: ', io.sockets.adapter.rooms['values']());
      });
      socket.on('leave', async (room: string) => {
        console.log('left room', room);
        await socket.leave(room);
        console.log('keys: ', io.sockets.adapter.rooms['keys']());
        console.log('values: ', io.sockets.adapter.rooms['values']());
      });

      // sending a message based on form element from client side
      socket.on('chat message', (message: string) => {
        console.log('message: ', message);
        console.log('now sending it back...');
        // This broadcasts to everyone except user, which is not what I want
        // socket.to('1').emit('chat message', message);
        io.to('1').emit('chat message', message);
      });
    });
    res.socket.server.io = io;
  } else {
    console.log('socket.io already running');
  }
  res.end();
};

export const config: NextConfig = {
  api: {
    bodyParser: false,
  },
};

export default handler;
