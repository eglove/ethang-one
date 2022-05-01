import { ChangeEvent, FormEvent, useContext, useState } from 'react';

import { UserContext } from '../../contexts/user-context';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase';
import { Button, BUTTON_TYPE_CLASSES } from '../button/button';
import { FormInput } from '../form-input/form-input';
import styles from './sign-in-form.module.css';

const defaultFormFields = {
  email: '',
  password: '',
};

export function SignInForm(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

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

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (typeof setCurrentUser !== 'undefined') {
        setCurrentUser(user);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div className={styles['SignUpFormContainer']}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
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
        <div className={styles['ButtonsContainer']}>
          <Button buttonProperties={{ type: 'submit' }}>Sign In</Button>
          <Button
            buttonProperties={{ type: 'submit' }}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
