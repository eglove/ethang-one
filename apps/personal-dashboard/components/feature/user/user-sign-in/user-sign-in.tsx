import { useLazyQuery } from '@apollo/client';
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
import { USER_SIGN_IN } from './user-sign-in-graphql';

export function UserSignIn(): JSX.Element {
  const [userSignIn, { loading, error }] = useLazyQuery<{ signin: string }>(
    USER_SIGN_IN
  );

  useEffect(() => {
    if (typeof error !== 'undefined') {
      toast.error(error.message);
    }
  }, [error]);

  const [formState, setFormState] = useState({
    Email: '',
    Password: '',
  });

  const handleSignIn = async (): Promise<void> => {
    const { data } = await userSignIn({
      variables: {
        email: formState.Email,
        password: formState.Password,
      },
    });

    if (typeof data?.signin === 'string') {
      try {
        setToken(data.signin);
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
  ];

  const buttons = [
    new SimpleFormButton({
      buttonText: 'Sign In',
      name: 'Submit',
      properties: { type: 'submit' },
    }),
  ];

  return (
    <div>
      <h2>Sign In</h2>
      <SimpleForm
        buttons={buttons}
        fieldsetProperties={{ disabled: loading }}
        formProperties={{ className: formStyles.Form }}
        formState={formState}
        inputs={inputs}
        postSubmitFunction={handleSignIn}
        setFormState={setFormState}
      />
    </div>
  );
}

export default UserSignIn;
