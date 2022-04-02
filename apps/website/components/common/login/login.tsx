import { Form, FormInput, InputType } from '@ethang/react-components';
import { useRouter } from 'next/router';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';
import { Container } from '../container/container';

export function Login(): JSX.Element {
  const router = useRouter();
  const [formState, setFormState] = useState({ Email: '', Password: '' });

  const formInputs = [
    new FormInput('Email', {
      inputProperties: { autocomplete: 'email', required: true },
      type: InputType.email,
    }),
    new FormInput('Password', {
      inputProperties: { autocomplete: 'password', required: true },
      type: InputType.password,
    }),
  ];

  const handleSubmit = async (): Promise<void> => {
    console.log({
      email: formState.Email,
      password: formState.Password,
    });
    const response = await fetch('/api/login', {
      body: JSON.stringify({
        email: formState.Email,
        password: formState.Password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { token } = (await response.json()) as { token?: string };

    if (typeof token !== 'undefined') {
      globalThis.localStorage?.setItem('token', JSON.stringify(token));
      router.reload();
    }
  };

  return (
    <Container>
      <Form
        formProperties={{ className: commonStyles.Form }}
        inputObjects={formInputs}
        inputState={formState}
        setInputState={setFormState}
        submitButtonText="Login"
        submitButtonProperties={{ onClick: handleSubmit }}
      />
    </Container>
  );
}
