import { SignUpForm } from '../../components/sign-up-form/sign-up-form';
import { signInWithGooglePopup } from '../../utils/firebase/firebase';

const logInGoogleUser = async (): Promise<void> => {
  await signInWithGooglePopup();
};

export function SignIn(): JSX.Element {
  return (
    <div>
      <h1>Sign In</h1>
      <button type="button" onClick={logInGoogleUser}>
        Sign In Popup
      </button>
      <SignUpForm />
    </div>
  );
}
