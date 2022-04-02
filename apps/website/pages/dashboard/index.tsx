import { useLocalStorage } from '@ethang/react-hooks';
import { useEffect } from 'react';

import { Container } from '../../components/common/container/container';
import { Login } from '../../components/common/login/login';

function Dashboard(): JSX.Element {
  const [token] = useLocalStorage<string | undefined>('token');

  useEffect(() => {
    console.log(token);
  }, [token]);

  if (typeof token === 'undefined') {
    return <Login />;
  }

  return (
    <Container>
      <p>hi</p>
    </Container>
  );
}

export default Dashboard;
