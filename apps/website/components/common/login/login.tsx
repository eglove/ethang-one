import { useLazyQuery } from '@apollo/client';
import {
  Container,
  InputType,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { useLocalStorage } from '@ethang/react-hooks';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import commonStyles from '../../../styles/common.module.css';
import { SIGN_IN } from './queries/login-queries';

export const Login = observer((): JSX.Element => {
  const [formState, setFormState] = useState({ Email: '', Password: '' });
  const [, setJwtToken] = useLocalStorage<string>('jwtToken');
  const [signInQuery, { data, loading, error }] = useLazyQuery<{
    signin: string;
  }>(SIGN_IN);

  useEffect(() => {
    if (typeof error !== 'undefined') {
      toast.error(error.message);
    }
  }, [error]);

  useEffect(() => {
    if (typeof data?.signin === 'string') {
      setJwtToken(data.signin);
      location.reload();
    }
  }, [data, setJwtToken]);

  const login = async (): Promise<void> => {
    await signInQuery({
      variables: {
        email: formState.Email,
        password: formState.Password,
      },
    });
  };

  const buttons = [
    new SimpleFormButton({
      buttonText: 'Login',
      name: 'Submit',
      properties: {
        type: 'submit',
      },
    }),
  ];

  const inputs = [
    new SimpleFormInput({
      inputProperties: { autoComplete: 'email', required: true },
      inputType: InputType.email,
      name: 'Email',
    }),
    new SimpleFormInput({
      inputProperties: { autoComplete: 'password', required: true },
      inputType: InputType.password,
      name: 'Password',
    }),
  ];

  return (
    <Container>
      <SimpleForm
        buttons={buttons}
        formState={formState}
        inputs={inputs}
        setFormState={setFormState}
        fieldsetProperties={{
          'aria-disabled': loading,
          disabled: loading,
        }}
        formProperties={{
          className: commonStyles.Form,
        }}
        postSubmitFunction={async (): Promise<void> => {
          await login();
        }}
      />
    </Container>
  );
});
