import { useMutation } from '@apollo/client';
import {
  Habit,
  HabitUpdateInput,
  HabitWhereUniqueInput,
} from '@ethang/prisma-nestjs-graphql';
import {
  InputType,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { Dispatch, SetStateAction, useState } from 'react';

import { UPDATE_HABIT } from '../../graphql/queries/dashboard-mutations';
import {
  ALL_HABITS,
  allHabitsDefaultVariables,
} from '../../graphql/queries/dashboard-queries';
import styles from '../habit.module.css';

interface HabitEditProperties {
  habit: Habit;
  setEditingHabit: Dispatch<SetStateAction<string>>;
}

export function HabitEdit({
  habit,
  setEditingHabit,
}: HabitEditProperties): JSX.Element {
  const [updateHabit, { loading }] = useMutation(UPDATE_HABIT, {
    refetchQueries: [
      { query: ALL_HABITS, variables: allHabitsDefaultVariables },
    ],
  });
  const [formState, setFormState] = useState({
    DueDate: new Date(habit.dueDate).toISOString().slice(0, 10),
    Name: habit.name,
    RecurInterval: habit.recurInterval,
  });

  const buttons = [
    new SimpleFormButton({
      buttonText: 'Cancel',
      name: 'Cancel',
      properties: {
        onClick(): void {
          setEditingHabit('');
        },
        style: {
          backgroundColor: 'red',
        },
      },
    }),
    new SimpleFormButton({
      buttonText: 'Update',
      name: 'Update',
      properties: { type: 'submit' },
    }),
  ];

  const handleUpdateHabit = async (): Promise<void> => {
    const data: HabitUpdateInput = {
      dueDate: { set: formState.DueDate },
      name: { set: formState.Name },
      recurInterval: { set: formState.RecurInterval },
    };

    const where: HabitWhereUniqueInput = {
      id: habit.id,
    };

    await updateHabit({ variables: { data, where } });

    setEditingHabit('');
  };

  const inputs = [
    new SimpleFormInput({
      hideLabel: true,
      name: 'Name',
    }),
    new SimpleFormInput({
      hideLabel: true,
      name: 'RecurInterval',
    }),
    new SimpleFormInput({
      hideLabel: true,
      inputType: InputType.date,
      name: 'DueDate',
    }),
  ];

  return (
    <div>
      <SimpleForm
        buttonContainerProperties={{ className: styles.ButtonContainer }}
        buttons={buttons}
        fieldsetProperties={{ disabled: loading }}
        formProperties={{ className: styles.UpdateHabitForm }}
        formState={formState}
        inputs={inputs}
        postSubmitFunction={handleUpdateHabit}
        setFormState={setFormState}
      />
    </div>
  );
}
