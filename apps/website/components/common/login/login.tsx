import {
  Container,
  InputType,
  SimpleForm,
  SimpleFormButton,
  SimpleFormInput,
} from '@ethang/react-components';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';

export const Login = observer((): JSX.Element => {
  const [formState, setFormState] = useState({ Email: '', Password: '' });

  const buttons = [
    new SimpleFormButton({
      buttonText: 'Login',
      name: 'Submit',
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
        formProperties={{ className: commonStyles.Form }}
        formState={formState}
        inputs={inputs}
        setFormState={setFormState}
      />
    </Container>
  );
});
