import { NextLink } from '@ethang/react-components';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { DashboardContext } from '../../../pages/dashboard';
import { Container } from '../../common/container/container';
import { HeadTag } from '../../common/head-tag/head-tag';
import { Login } from '../../common/login/login';
import { Calories } from '../calories';
import { FinanceGraph } from '../finance-graph/finance-graph';
import { AddHabit } from '../habit/add-habit';
import styles from './dashboard-home.module.css';

export const DashboardHome = observer((): JSX.Element => {
  const dashboardState = useContext(DashboardContext);

  if (dashboardState.isLoggedIn) {
    return (
      <Container>
        <HeadTag title="Dashboard" />
        <div className={styles.DashboardContainer}>
          <Calories />
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <FinanceGraph />
            <NextLink linkProperties={{ href: '/dashboard/finance' }}>
              Update
            </NextLink>
          </div>
          <div />
        </div>
        <AddHabit />
      </Container>
    );
  }

  return <Login />;
});

export default DashboardHome;
