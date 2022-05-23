import { gql, useQuery } from '@apollo/client';
import ChatHome from '@/components/ChatHome';
import LoginAuth0 from '@/components/LoginAuth0';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const UserQuery = gql`
  query User($username: String) {
    user(username: $username) {
      username
      first_name
      last_name
    }
  }
`;

const PostLogin = () => {
  let body = null;
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState('');
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading) setUsername(user.email);
  }, [isLoading, user, username]);

  const { data, loading, error } = useQuery(UserQuery, {
    variables: { username: username },
  });
  if (error) return <h1>{error.message}</h1>;
  if (loading) return <div className="h-screen bg-discord_dark"></div>;
  if (data.user) {
    if (
      data.user.first_name === null &&
      data.user.last_name === null &&
      showLogin
    ) {
      body = <LoginAuth0 setShowLogin={setShowLogin} />;
    } else {
      body = <ChatHome />;
    }
  }
  return body;
};

export default PostLogin;
