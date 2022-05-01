import { SignInForm } from '../../components/sign-in-form/sign-in-form';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form';
import styles from './authentication.module.css';

export function Authentication(): JSX.Element {
  return (
    <div className={styles['AuthenticationContainer']}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
