import { useQuery } from '@apollo/client';
import { NextLink } from '@ethang/react-components';
import { Habit } from '@prisma/client';

import {
  DUE_HABITS,
  dueHabitsDefaultVariables,
} from '../graphql/queries/dashboard-queries';
import { HabitList } from './habit-list';

export function HabitLayout(): JSX.Element {
  const { data, loading } = useQuery<{ habits: Habit[] }>(DUE_HABITS, {
    fetchPolicy: 'cache-and-network',
    variables: dueHabitsDefaultVariables,
  });

  return (
    <div>
      {Array.isArray(data?.habits) && (
        <HabitList habits={data.habits} isValidating={loading} />
      )}
      <NextLink linkProperties={{ href: 'dashboard/habit/manage' }}>
        Manage Habits
      </NextLink>
    </div>
  );
}
