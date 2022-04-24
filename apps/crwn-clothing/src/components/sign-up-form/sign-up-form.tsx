import { ChangeEvent, FormEvent, useState } from 'react';

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';

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
    await createAuthUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1>Sign up with your email and password.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input
          required
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input
          required
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
