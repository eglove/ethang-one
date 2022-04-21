import { useMutation } from '@apollo/client';
import {
  InputType,
  SimpleForm,
  simpleFormButtons,
  simpleFormInputs,
} from '@ethang/react-components';
import { eightBaseFormatTime } from '@ethang/util-typescript';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';
import { createHabit } from '../graphql/mutations';
import { dueHabits } from '../graphql/queries';

export function AddHabit(): JSX.Element {
  const [habitCreate] = useMutation(createHabit);
  const [formState, setFormState] = useState({
    Name: '',
    RecurInterval: '',
    StartDate: undefined,
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

  const handleCreateHabit = (): void => {
    habitCreate({
      refetchQueries: [
        {
          query: dueHabits,
          variables: {
            dueDate: eightBaseFormatTime(),
          },
        },
      ],
      variables: {
        dueDate: formState.StartDate,
        name: formState.Name,
        recurInterval: formState.RecurInterval,
      },
    }).catch((error: Error) => {
      console.error(error);
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
