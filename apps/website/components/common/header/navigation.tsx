import { NextLink } from '@ethang/react-components';

import { allImages } from '../../../db/data/images/all-images';
import { ImageComponent } from '../image-component/image-component';
import styles from './header.module.css';

export function Navigation(): JSX.Element {
  const navLinks = [
    {
      link: '/blog',
      title: 'Blog',
    },
    {
      link: '/courses',
      title: 'Courses',
    },
  ];

  return (
    <>
      <div className={`${styles.NavigationLink} ${styles.SocialLinks}`}>
        <NextLink linkProperties={{ href: 'https://github.com/eglove' }}>
          <ImageComponent
            image={allImages.technologyImages.github}
            imageProperties={{ height: '40px', width: '40px' }}
          />
        </NextLink>
        <NextLink
          linkProperties={{ href: 'https://www.linkedin.com/in/ethan-glover/' }}
        >
          <ImageComponent
            image={allImages.rootImages.linkedIn}
            imageProperties={{ height: '40px', width: '40px' }}
          />
        </NextLink>
      </div>
      <nav className={styles.Navigation}>
        {navLinks.map(navLink => {
          return (
            <NextLink
              key={navLink.title}
              linkProperties={{
                className: styles.NavigationLink,
                href: navLink.link,
                key: navLink.title,
              }}
            >
              {navLink.title}
            </NextLink>
          );
        })}
      </nav>
      <script async src="https://cse.google.com/cse.js?cx=1040596e09bea9882" />
      <div className="gcse-search" />
    </>
  );
}
