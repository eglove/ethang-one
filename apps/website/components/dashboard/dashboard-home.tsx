import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';

import { DashboardContext } from '../../pages/dashboard';
import { Container } from '../common/container/container';
import { HeadTag } from '../common/head-tag/head-tag';
import { Login } from '../common/login/login';

export const DashboardHome = observer((): JSX.Element => {
  const dashboardState = useContext(DashboardContext);

  useEffect(() => {
    console.log(dashboardState.isLoggedIn);
  }, [dashboardState]);

  if (dashboardState.isLoggedIn) {
    return (
      <Container>
        <HeadTag title="Dashboard" />
        <p>Profile</p>
      </Container>
    );
  }

  return <Login />;
});

export default DashboardHome;
