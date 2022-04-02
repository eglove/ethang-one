import { useMutation, useQuery } from '@apollo/client';
import ms from 'ms';
import { ChangeEvent } from 'react';

import { updateHabitDueDate } from '../graphql/mutations';
import { DueHabits, dueHabits } from '../graphql/queries';
import styles from './habit.module.css';

export function HabitList(): JSX.Element {
  const [updateDueDate] = useMutation(updateHabitDueDate);

  const { data } = useQuery<DueHabits>(dueHabits, {
    variables: {
      dueDate: new Date().toISOString().split('T')[0],
    },
  });

  const handleEventComplete = (event: ChangeEvent<HTMLInputElement>): void => {
    const habit = JSON.parse(event.target.value) as {
      dueDate: string;
      name: string;
      recurInterval: string;
    };
    const nextDueDate = new Date(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      new Date(habit.dueDate).getTime() + Number(ms(habit.recurInterval))
    )
      .toISOString()
      .split('T')[0];

    updateDueDate({
      refetchQueries: [
        {
          query: dueHabits,
          variables: {
            dueDate: new Date().toISOString().split('T')[0],
          },
        },
      ],
      variables: {
        dueDate: nextDueDate,
        name: habit.name,
      },
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <div className={styles.DueHeader}>Due Today:</div>
      {data?.habitsList?.items?.length <= 0 && <p>All tasks complete!</p>}
      {data?.habitsList?.items?.length > 0 &&
        data.habitsList.items.map(habit => {
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
