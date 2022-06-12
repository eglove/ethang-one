import { ApolloError, useQuery } from '@apollo/client';
import { Habit } from '@ethang/prisma-nestjs-graphql';

import {
  ALL_HABITS,
  allHabitsDefaultVariables,
} from '../../graphql/queries/dashboard-queries';

type UseHabitManageReturn = {
  data: { habits: Habit[] };
  error: ApolloError;
  loading: boolean;
};

export const useHabitManage = (): UseHabitManageReturn => {
  const { data, error, loading } = useQuery<{ habits: Habit[] }>(ALL_HABITS, {
    fetchPolicy: 'cache-and-network',
    variables: allHabitsDefaultVariables,
  });

  return { data, error, loading };
};
