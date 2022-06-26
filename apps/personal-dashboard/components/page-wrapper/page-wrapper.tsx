import { useReactiveVar } from '@apollo/client';
import { ToastContainer } from 'react-toastify';

import UserRegister from '../feature/user/user-register/user-register';
import { jwtTokenVariable } from './reactive-variables';

export interface PageWrapperProperties {
  children: JSX.Element | JSX.Element[];
}

export function PageWrapper({ children }: PageWrapperProperties): JSX.Element {
  const token = useReactiveVar(jwtTokenVariable);

  return (
    <main>
      <ToastContainer />
      {typeof token === 'undefined' && <UserRegister />}
      {typeof token === 'string' && children}
    </main>
  );
}

export default PageWrapper;
