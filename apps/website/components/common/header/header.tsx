import { LinkComponent } from '../link-component/link-component';
import styles from './header.module.css';
import { Navigation } from './navigation';

export function Header(): JSX.Element {
  const headerContent = <header className={styles.Header}>EthanG</header>;

  return (
    <div className={styles.HeaderContainer}>
      <LinkComponent
        linkProperties={{ href: '/', style: { textDecoration: 'none' } }}
      >
        {headerContent}
      </LinkComponent>
      <Navigation />
    </div>
  );
}
