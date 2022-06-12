import { useMutation } from '@apollo/client';
import { HabitUpdateInput } from '@ethang/prisma-nestjs-graphql';
import { Habit } from '@prisma/client';
import ms from 'ms';
import { ChangeEvent } from 'react';

import { UPDATE_HABIT } from '../graphql/queries/dashboard-mutations';
import {
  DUE_HABITS,
  dueHabitsDefaultVariables,
} from '../graphql/queries/dashboard-queries';
import styles from './habit.module.css';

interface HabitListProperties {
  habits: Habit[];
  isValidating: boolean;
}

export function HabitList({
  habits,
  isValidating,
}: HabitListProperties): JSX.Element {
  const [updateHabit] = useMutation(UPDATE_HABIT, {
    refetchQueries: [
      {
        query: DUE_HABITS,
        variables: dueHabitsDefaultVariables,
      },
    ],
  });

  const handleEventComplete = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const habit = JSON.parse(event.target.value) as {
      dueDate: string;
      name: string;
      recurInterval: string;
    };

    const updateTo = new Date(
      Date.now() + ms(habit.recurInterval)
    ).toISOString();

    const data: HabitUpdateInput = {
      dueDate: {
        set: updateTo,
      },
      name: {
        set: habit.name,
      },
      recurInterval: {
        set: habit.recurInterval,
      },
    };

    await updateHabit({
      variables: {
        data,
        where: {
          name: habit.name,
        },
      },
    });
  };

  return (
    <div>
      <div className={styles.DueHeader}>Due Today:</div>
      {habits?.length <= 0 && <p>All tasks complete!</p>}
      {habits?.length > 0 &&
        habits.map(habit => {
          return (
            <div key={habit.name}>
              <input
                disabled={isValidating}
                id={habit.name}
                type="checkbox"
                value={JSON.stringify(habit)}
                onChange={handleEventComplete}
              />{' '}
              <label htmlFor={habit.name}>
                {habit.name} ({habit.recurInterval})
              </label>
            </div>
          );
        })}
    </div>
  );
}
