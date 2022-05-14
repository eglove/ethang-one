import { allImages } from '@ethang/local-database';
import { NextLink } from '@ethang/react-components';

import { ImageComponent } from '../image-component/image-component';
import styles from './header.module.css';
import { Navigation } from './navigation';

export function Header(): JSX.Element {
  const headerContent = <header className={styles.Header}>EthanG</header>;

  return (
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
          <ImageComponent
            image={allImages.technologyImages.github}
            imageProperties={{ height: '40px', width: '40px' }}
          />
        </NextLink>
        <NextLink
          linkProperties={{
            href: 'https://www.linkedin.com/in/ethan-glover/',
          }}
        >
          <ImageComponent
            image={allImages.rootImages.linkedIn}
            imageProperties={{ height: '40px', width: '40px' }}
          />
        </NextLink>
      </div>
    </div>
  );
}
