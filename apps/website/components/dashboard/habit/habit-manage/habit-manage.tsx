import { Button, Container, NextLink } from '@ethang/react-components';
import { useState } from 'react';

import { AddHabit } from '../add-habit';
import styles from '../habit.module.css';
import { HabitEdit } from './habit-edit';
import { useHabitManage } from './use-habit-manage';

const dateTimeFormt = (dateTime: Date | string | number): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  return Intl.DateTimeFormat('en-US', options).format(new Date(dateTime));
};

export function HabitManage(): JSX.Element {
  const { data, loading } = useHabitManage();
  const [editingHabit, setEditingHabit] = useState<string>();

  if (!loading) {
    return (
      <Container>
        <NextLink linkProperties={{ href: '/dashboard' }}>
          Back to Dashboard
        </NextLink>
        <AddHabit habitsLoading={loading} />
        <div>
          {Array.isArray(data?.habits) &&
            data.habits.map(habit => {
              if (habit.id === editingHabit) {
                return (
                  <HabitEdit habit={habit} setEditingHabit={setEditingHabit} />
                );
              }

              return (
                <div className={styles.ManageHabitsItem} key={habit.id}>
                  <div>{habit.name}</div>
                  <div>{habit.recurInterval}</div>
                  <div>{dateTimeFormt(habit.dueDate)}</div>
                  {(typeof editingHabit !== 'string' ||
                    editingHabit === '') && (
                    <div>
                      <Button
                        size="small"
                        text="Update"
                        buttonProperties={{
                          onClick(): void {
                            setEditingHabit(habit.id);
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </Container>
    );
  }
}
