import { JSON_HEADER } from '@ethang/util-typescript';
import { Habit } from '@prisma/client';
import { ChangeEvent } from 'react';

import styles from './habit.module.css';

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
};

interface HabitListProperties {
  data: Habit[];
}

export function HabitList({ data }: HabitListProperties): JSX.Element {
  return (
    <div>
      <div className={styles.DueHeader}>Due Today:</div>
      {data?.length <= 0 && <p>All tasks complete!</p>}
      {data?.length > 0 &&
        data.map(habit => {
          return (
            <div key={habit.name}>
              <input
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
