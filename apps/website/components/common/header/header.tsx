import { allImages } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

import { NextImageComponent } from '../../../../../libs/react-components/src/lib/next-image-component/next-image-component';
import styles from './header.module.css';
import { Navigation } from './navigation';

export function Header(): JSX.Element {
  const headerContent = <header className={styles.Header}>EthanG</header>;

  return (
    <>
      <div className={styles.HeaderContainer}>
        <div>
          <NextLink
            linkProperties={{ href: '/', style: { textDecoration: 'none' } }}
          >
            {headerContent}
          </NextLink>
          <Navigation />
        </div>
        <div className={styles.SocialLinks}>
          <NextLink linkProperties={{ href: 'https://github.com/eglove' }}>
            <NextImageComponent
              image={allImages.technologyImages.github}
              imageProperties={{ height: '40px', width: '40px' }}
            />
          </NextLink>
          <NextLink
            linkProperties={{
              href: 'https://www.linkedin.com/in/ethan-glover/',
            }}
          >
            <NextImageComponent
              image={allImages.rootImages.linkedIn}
              imageProperties={{ height: '40px', width: '40px' }}
            />
          </NextLink>
        </div>
      </div>
      <script async src="https://cse.google.com/cse.js?cx=1040596e09bea9882" />
      <div className="gcse-search" style={{ margin: '0 1rem' }} />
    </>
  );
}
