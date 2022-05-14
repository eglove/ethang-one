import { NextLink } from '@ethang/react-components';

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
      <nav className={styles.Navigation}>
        {navLinks.map(navLink => {
          return (
            <NextLink
              key={navLink.title}
              linkProperties={{
                className: styles.NavigationLink,
                href: navLink.link,
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
