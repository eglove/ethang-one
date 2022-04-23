import { NextLink } from '@ethang/react-components';
import { fetcher } from '@ethang/util-typescript';
import { Habit } from '@prisma/client';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import useSWR from 'swr';

import { DashboardContext } from '../../../pages/dashboard';
import { Container } from '../../common/container/container';
import { HeadTag } from '../../common/head-tag/head-tag';
import { Login } from '../../common/login/login';
import { Calories } from '../calories';
import { FinanceGraph } from '../finance-graph/finance-graph';
import { AddHabit } from '../habit/add-habit';
import { HabitList } from '../habit/habit-list';

export const DashboardHome = observer((): JSX.Element => {
  const dashboardState = useContext(DashboardContext);
  const { data } = useSWR<Habit[]>('/api/habit', fetcher);

  if (dashboardState.isLoggedIn) {
    return (
      <Container>
        <HeadTag title="Dashboard" />
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Calories />
        </div>
        <br />
        <HabitList data={data} />
        <AddHabit />
        <br />
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <FinanceGraph />
          <NextLink linkProperties={{ href: '/dashboard/finance' }}>
            Update
          </NextLink>
        </div>
      </Container>
    );
  }

  return <Login />;
});

export default DashboardHome;
