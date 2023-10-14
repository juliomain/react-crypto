import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Exchange = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/exchange/1');
  }, []);

  return <p>Redirecting...</p>;
};

export default Exchange;
