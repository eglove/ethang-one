import { useMutation } from '@apollo/client';
import { Form, FormInput, InputType } from '@ethang/react-components';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';
import { createHabit } from '../graphql/mutations';

export function AddHabit(): JSX.Element {
  const [habitCreate] = useMutation(createHabit);
  const [formState, setFormState] = useState({
    Name: '',
    RecurInterval: '',
    StartDate: undefined,
  });

  const formInputs = [
    new FormInput('Name', { inputProperties: { required: true } }),
    new FormInput('RecurInterval', {
      inputProperties: { required: true },
    }),
    new FormInput('StartDate', {
      inputProperties: { required: true },
      type: InputType.date,
    }),
  ];

  const handleCreateHabit = (): void => {
    habitCreate({
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
      <Form
        clearFormAfterSubmit
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
        inputObjects={formInputs}
        inputState={formState}
        setInputState={setFormState}
        submitButtonText="Add Habit"
        postSubmitFunction={handleCreateHabit}
      />
    </div>
  );
}
