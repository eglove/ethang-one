import { useState } from 'react';

import UserSignIn from '../user-sign-in/user-sign-in';
import UserSignUp from '../user-sign-up/user-sign-up';
import styles from './user-register.module.css';

export function UserRegister(): JSX.Element {
  const [isSigningIn, setIsSigningIn] = useState(true);

  const handleSwitchForm = (): void => {
    setIsSigningIn(isSigningIn_ => {
      return !isSigningIn_;
    });
  };

  return (
    <div className={styles.UserAuthContainer}>
      <h1>Personal Dashboard</h1>
      {isSigningIn ? <UserSignIn /> : <UserSignUp />}
      <div
        className={styles.SwitchFormLink}
        role="button"
        tabIndex={0}
        onClick={handleSwitchForm}
        onKeyDown={handleSwitchForm}
      >
        {isSigningIn ? 'Sign Up' : 'Sign In'}
      </div>
    </div>
  );
}

export default UserRegister;
