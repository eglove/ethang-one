import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import {
  defaultDateTimeInputFormat,
  JSON_HEADER,
} from '@ethang/util-typescript';
import { Habit } from '@prisma/client';
import { useState } from 'react';
import { KeyedMutator } from 'swr';

import commonStyles from '../../../styles/common.module.css';

interface AddHabitProperties {
  isValidating: boolean;
  mutate: KeyedMutator<Habit[]>;
}

export function AddHabit({
  isValidating,
  mutate,
}: AddHabitProperties): JSX.Element {
  const [formState, setFormState] = useState({
    Name: '',
    RecurInterval: '',
    StartDate: defaultDateTimeInputFormat(),
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
    const newHabit = {
      dueDate: new Date(formState.StartDate).getTime(),
      name: formState.Name,
      recurInterval: formState.RecurInterval,
    };

    await fetch('/api/habit', {
      body: JSON.stringify(newHabit),
      headers: JSON_HEADER,
      method: 'POST',
    });
    await mutate();
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
