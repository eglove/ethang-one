import { Constant, ENV_KEYS } from '@ethang/node-environment';
import { Form, FormInput, InputType } from '@ethang/react-components';
import jwt from 'jsonwebtoken';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';

import { DashboardContext } from '../../../pages/dashboard';
import commonStyles from '../../../styles/common.module.css';
import { Container } from '../container/container';

export const Login = observer((): JSX.Element => {
  const dashboardState = useContext(DashboardContext);
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
      const constants = new Constant();
      const data = jwt.decode(token) as { email: string };

      if (data.email === constants.get(ENV_KEYS.ADMIN_EMAIL)) {
        globalThis.localStorage?.setItem('token', JSON.stringify(token));
        dashboardState.isLoggedIn = true;
      } else {
        globalThis.localStorage?.removeItem('token');
        dashboardState.isLoggedIn = false;
      }
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
});
