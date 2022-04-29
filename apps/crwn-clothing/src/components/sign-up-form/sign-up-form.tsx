import { ChangeEvent, FormEvent, useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import { FormInput } from '../form-input/form-input';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

export function SignUpForm(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, passwordConfirm } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormFields(formFields_ => {
      return {
        ...formFields_,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      // eslint-disable-next-line no-alert
      alert('Passwords do not match.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error: unknown) {
      const errorWithType = error as { code: string };
      if (errorWithType.code === 'auth/email-already-in-use') {
        // eslint-disable-next-line no-alert
        alert('Email already in use.');
        return;
      }

      console.error('User creation error.', error);
    }
  };

  return (
    <div>
      <h1>Sign up with your email and password.</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputAttributes={{
            name: 'displayName',
            onChange: handleChange,
            required: true,
            type: 'text',
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputAttributes={{
            name: 'email',
            onChange: handleChange,
            required: true,
            type: 'email',
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputAttributes={{
            name: 'password',
            onChange: handleChange,
            required: true,
            type: 'password',
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputAttributes={{
            name: 'passwordConfirm',
            onChange: handleChange,
            required: true,
            type: 'password',
            value: password,
          }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}