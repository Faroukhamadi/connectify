import Pusher from 'pusher';
import Cors from 'micro-cors';

const cors = Cors();

export default cors(async function handler(_req, res) {
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: 'eu',
    useTLS: true,
    // encrypted: true,
  });

  await pusher.trigger('my-channel', 'my-event', {
    message: 'This is the message: ',
  });

  res.json({ status: 200 });
});
