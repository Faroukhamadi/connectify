import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { PrismaClient } from '@prisma/client';
import ChatMain from '../components/Chat/Main/ChatMain';
import ChatNav from '../components/Chat/Nav/ChatNav';

const ChatHome = () => {
  return (
    <div className="max-h-screen flex">
      <ChatNav />
      <ChatMain />
    </div>
  );
};

export default ChatHome;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: {
        username: session.user.email,
      },
    });
    // TODO: make this condition more readable
    if (
      (user &&
        (!user.first_name ||
          !(user.first_name.length && user.last_name.length))) ||
      !(user.first_name && user.last_name)
    ) {
      return {
        redirect: {
          permanent: false,
          destination: '/loginauth0',
        },
        props: {},
      };
    }
    return {
      props: {},
    };
  },
});
