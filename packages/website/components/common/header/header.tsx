import { LinkComponent } from '../link-component/link-component';
import styles from './header.module.css';
import { Navigation } from './navigation';

export const Header = (): JSX.Element => {
  const headerContent = <h1 className={styles.Header as string}>EthanG</h1>;

  return (
    <header>
      <LinkComponent
        linkProperties={{ href: '/', style: { textDecoration: 'none' } }}
      >
        {headerContent}
      </LinkComponent>
      <Navigation />
    </header>
  );
};
