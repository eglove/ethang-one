import { useMutation } from '@apollo/client';
import {
  AutoComplete,
  InputType,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import formStyles from '../../../../../../styles/form.module.css';
import { setToken } from '../../../../util/jwt-token';
import { USER_SIGN_UP } from './user-sign-up-graphql';

export function UserSignUp(): JSX.Element {
  const [signUp, { loading, error }] = useMutation<{ signup: string }>(
    USER_SIGN_UP
  );
  const [formState, setFormState] = useState({
    ConfirmPassword: '',
    Email: '',
    Password: '',
  });

  useEffect(() => {
    if (typeof error !== 'undefined') {
      toast.error(error.message);
    }
  }, [error]);

  const handleSignUp = async (): Promise<void> => {
    if (formState.Password !== formState.ConfirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    const { data } = await signUp({
      variables: {
        email: formState.Email,
        password: formState.Password,
      },
    });

    if (typeof data?.signup === 'string') {
      try {
        setToken(data.signup);
      } catch (error_: unknown) {
        // @ts-expect-error Set if possible
        toast.error(error_.message ?? 'Unknown Error');
      }
    }
  };

  const inputs = [
    new SimpleFormInput({
      inputProperties: { autoComplete: AutoComplete.email, required: true },
      inputType: InputType.email,
      name: 'Email',
    }),
    new SimpleFormInput({
      inputProperties: {
        autoComplete: AutoComplete.currentPassword,
        required: true,
      },
      inputType: InputType.password,
      name: 'Password',
    }),
    new SimpleFormInput({
      inputProperties: {
        autoComplete: AutoComplete.newPassword,
        required: true,
      },
      inputType: InputType.password,
      name: 'ConfirmPassword',
    }),
  ];

  const buttons = [
    new SimpleFormButton({
      buttonText: 'Sign Up',
      name: 'Submit',
      properties: { type: 'submit' },
    }),
  ];

  return (
    <div>
      <h2>Sign Up</h2>
      <SimpleForm
        buttons={buttons}
        fieldsetProperties={{ disabled: loading }}
        formProperties={{ className: formStyles.Form }}
        formState={formState}
        inputs={inputs}
        postSubmitFunction={handleSignUp}
        setFormState={setFormState}
      />
    </div>
  );
}

export default UserSignUp;
