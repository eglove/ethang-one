import {useReactiveVar} from '@apollo/client';

import {
  isUserAdminVariable,
  userIdVariable,
} from '../../../graphql/reactive-variables';
import {LinkComponent} from '../link-component/link-component';
import styles from './header.module.css';
import {Navigation} from './navigation';

export const Header = (): JSX.Element => {
  const isUserAdmin = useReactiveVar(isUserAdminVariable);
  const userId = useReactiveVar(userIdVariable);

  const handleLogOut = (): void => {
    userIdVariable(null);
    isUserAdminVariable(false);
  };

  const headerContent = (
    <h1 className={styles.Header}>{isUserAdmin ? 'Admin' : 'EthanG'}</h1>
  );

  return (
    <header>
      <LinkComponent
        styles={{textDecoration: 'none'}}
        content={headerContent}
        href={isUserAdmin ? '/admin' : '/'}
      />
      {isUserAdmin && userId && (
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      )}
      <Navigation/>
    </header>
  );
};
