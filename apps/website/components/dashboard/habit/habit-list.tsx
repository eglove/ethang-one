import { JSON_HEADER } from '@ethang/util-typescript';
import { Habit } from '@prisma/client';
import { ChangeEvent } from 'react';
import { KeyedMutator } from 'swr';

import styles from './habit.module.css';

interface HabitListProperties {
  data: Habit[];
  isValidating: boolean;
  mutate: KeyedMutator<Habit[]>;
}

export function HabitList({
  data,
  isValidating,
  mutate,
}: HabitListProperties): JSX.Element {
  const handleEventComplete = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const habit = JSON.parse(event.target.value) as {
      dueDate: string;
      name: string;
      recurInterval: string;
    };

    await fetch('/api/habit/complete', {
      body: JSON.stringify({
        name: habit.name,
        recurInterval: habit.recurInterval,
      }),
      headers: JSON_HEADER,
      method: 'POST',
    });
    await mutate();
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
