import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import { JSON_HEADER, simpleDateFormat } from '@ethang/util-typescript';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';

export function AddHabit(): JSX.Element {
  const [formState, setFormState] = useState({
    Name: '',
    RecurInterval: '',
    StartDate: simpleDateFormat(),
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
      dueDate: simpleDateFormat(formState.StartDate),
      name: formState.Name,
      recurInterval: formState.RecurInterval,
    };

    await fetch('/api/habit', {
      body: JSON.stringify(newHabit),
      headers: JSON_HEADER,
      method: 'POST',
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
