import { useQuery } from '@apollo/client';
import { Container, NextLink } from '@ethang/react-components';
import { Habit } from '@prisma/client';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { DashboardContext } from '../../../pages/dashboard';
import { HeadTag } from '../../common/head-tag/head-tag';
import { Login } from '../../common/login/login';
import { Calories } from '../calories';
import { FinanceGraph } from '../finance-graph/finance-graph';
import { DUE_HABITS } from '../graphql/queries/dashboard-queries';
import { AddHabit } from '../habit/add-habit';
import { HabitList } from '../habit/habit-list';

const beforeMidnight = (): number => {
  const date = new Date();
  date.setHours(24, 0, 0, 0);
  return date.getTime() - 1;
};

export const DashboardHome = observer((): JSX.Element => {
  const dashboardState = useContext(DashboardContext);
  const { data, loading } = useQuery<Habit[]>(DUE_HABITS, {
    variables: {
      dueDate: beforeMidnight(),
    },
  });

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
        <HabitList data={data} isValidating={loading} />
        <AddHabit isValidating={loading} />
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
