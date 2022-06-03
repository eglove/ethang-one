import { useMutation } from '@apollo/client';
import { Habit } from '@prisma/client';
import { ChangeEvent } from 'react';

import { HabitUpdateInput } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/habit-update.input';
import { HabitWhereInput } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/habit/habit-where.input';
import { UPDATE_HABIT } from '../graphql/queries/dashboard-mutations';
import styles from './habit.module.css';

interface HabitListProperties {
  data: Habit[];
  isValidating: boolean;
}

export function HabitList({
  data,
  isValidating,
}: HabitListProperties): JSX.Element {
  const [updateHabit] = useMutation(UPDATE_HABIT);

  const handleEventComplete = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const habit = JSON.parse(event.target.value) as {
      dueDate: string;
      name: string;
      recurInterval: string;
    };

    const data: HabitUpdateInput = {
      dueDate: {
        set: habit.dueDate,
      },
      name: {
        set: habit.name,
      },
      recurInterval: {
        set: habit.recurInterval,
      },
    };

    const where: HabitWhereInput = {
      name: {
        equals: habit.name,
      },
    };

    await updateHabit({
      variables: {
        data,
        where,
      },
    });
  };

  return (
    <div>
      <div className={styles.DueHeader}>Due Today:</div>
      {data?.length <= 0 && <p>All tasks complete!</p>}
      {data?.length > 0 &&
        data.map(habit => {
          return (
            <div key={habit.name}>
              <input
                disabled={isValidating}
                id={habit.name}
                type="checkbox"
                value={JSON.stringify(habit)}
                onChange={handleEventComplete}
              />{' '}
              <label htmlFor={habit.name}>{habit.name}</label>
            </div>
          );
        })}
    </div>
  );
}
