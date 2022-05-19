import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function useAuthentication(authRoute, nonAuthRoute) {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push(nonAuthRoute);
    } else {
      router.push(authRoute);
    }
  }, []);
}
