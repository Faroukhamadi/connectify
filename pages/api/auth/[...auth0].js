import { handleAuth } from '@auth0/nextjs-auth0';

console.log('env variable:', process.env.AUTH0_SECRET);

export default handleAuth();
