import Pusher from 'pusher';
import Cors from 'micro-cors';

const cors = Cors();

export default cors(async function handler(req, res) {
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: 'eu',
    // useTLS: true,
    // encrypted: true,
  });

  const body = await req.body;
  console.log(body);

  await pusher.trigger('my-channel', 'my-event', body);

  console.log(req.method);
  if (req.method === 'POST') {
    return await res.send({ resp: 'yayyy' });
  }
  // if (req.method === 'GET') {
  //   await res.json({ heyThere: 'hey' });
  // }
  // const response = await req.body;
  // console.log(response);

  // pusher.post('/', () => {
  //   console.log('hey');
  // });

  // res.json({ status: 200 });
});
