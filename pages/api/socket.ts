import Pusher from 'pusher';
import Cors from 'micro-cors';
import { RequestHandler } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID ?? '',
    key: process.env.PUSHER_APP_KEY ?? '',
    secret: process.env.PUSHER_APP_SECRET ?? '',
    cluster: 'eu',
    // useTLS: true,
    // encrypted: true,
  });

  console.log(req.method);
  const body = await req.body;
  console.log('body: ', body);

  await pusher.trigger('my-channel', 'my-event', body);

  try {
    if (req.method === 'POST') {
      console.log('hello world');
      return res.send({ resp: 'yayyy' });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
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
};

export default handler;
