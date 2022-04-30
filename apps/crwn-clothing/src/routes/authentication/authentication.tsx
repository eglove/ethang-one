import { SignInForm } from '../../components/sign-in-form/sign-in-form';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form';

export function Authentication(): JSX.Element {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
