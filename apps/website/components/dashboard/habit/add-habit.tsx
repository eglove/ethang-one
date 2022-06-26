import { useMutation } from '@apollo/client';
import { HabitCreateInput } from '@ethang/prisma-nestjs-graphql';
import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import { useState } from 'react';

import formStyles from '../../../../../styles/form.module.css';
import { CREATE_HABIT } from '../graphql/queries/dashboard-mutations';
import {
  ALL_HABITS,
  allHabitsDefaultVariables,
} from '../graphql/queries/dashboard-queries';

interface AddHabitProperties {
  habitsLoading: boolean;
}

export function AddHabit({ habitsLoading }: AddHabitProperties): JSX.Element {
  const [createHabit] = useMutation(CREATE_HABIT, {
    refetchQueries: [
      {
        fetchPolicy: 'network-only',
        query: ALL_HABITS,
        variables: allHabitsDefaultVariables,
      },
    ],
  });

  const [formState, setFormState] = useState({
    Name: '',
    RecurInterval: '',
    StartDate: '',
  });

  const inputs = simpleFormInputs([
    {
      inputProperties: { required: true },
      name: 'Name',
    },
    {
      inputProperties: { required: true },
      name: 'RecurInterval',
    },
    {
      inputProperties: { required: true },
      inputType: InputType.date,
      name: 'StartDate',
    },
  ]);

  const buttons = simpleFormButtons([
    {
      name: 'Add Habit',
      properties: { type: 'submit' },
    },
  ]);

  const handleCreateHabit = async (): Promise<void> => {
    const newHabit: HabitCreateInput = {
      dueDate: new Date(formState.StartDate),
      name: formState.Name,
      recurInterval: formState.RecurInterval,
    };

    await createHabit({
      variables: {
        data: newHabit,
      },
    });
  };

  return (
    <div>
      <SimpleForm
        clearFormAfterSubmit
        buttons={buttons}
        formState={formState}
        inputs={inputs}
        postSubmitFunction={handleCreateHabit}
        setFormState={setFormState}
        fieldsetProperties={{
          disabled: habitsLoading,
          style: {
            alignItems: 'flex-end',
            display: 'flex',
            gap: '1rem',
          },
        }}
        formProperties={{
          className: formStyles.Form,
        }}
      />
    </div>
  );
}
