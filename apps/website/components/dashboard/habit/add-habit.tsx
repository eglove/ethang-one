import { useMutation } from '@apollo/client';
import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import { HabitCreateInput } from '@ethang/types';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';
import { CREATE_HABIT } from '../graphql/queries/dashboard-mutations';

interface AddHabitProperties {
  isValidating: boolean;
}

export function AddHabit({ isValidating }: AddHabitProperties): JSX.Element {
  const [createHabit] = useMutation(CREATE_HABIT);

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
          disabled: isValidating,
          style: {
            alignItems: 'flex-end',
            display: 'flex',
            gap: '1rem',
          },
        }}
        formProperties={{
          className: commonStyles.Form,
        }}
      />
    </div>
  );
}
