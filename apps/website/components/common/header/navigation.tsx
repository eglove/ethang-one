import { NextLink } from '@ethang/react-components';
import Image from 'next/image';

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
    <div>
      <div className={`${styles.NavigationLink} ${styles.SocialLinks}`}>
        <NextLink linkProperties={{ href: 'https://github.com/eglove' }}>
          <Image height="40px" width="48px" src="/images/github.png" />
        </NextLink>
        <NextLink
          linkProperties={{ href: 'https://www.linkedin.com/in/ethan-glover/' }}
        >
          <Image height="40px" width="40px" src="/images/linkedin.svg" />
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
    </div>
  );
}
