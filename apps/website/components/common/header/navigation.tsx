import Script from 'next/script';

import { LinkComponent } from '../link-component/link-component';
import styles from './header.module.css';

export const Navigation = (): JSX.Element => {
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
            <LinkComponent
              key={navLink.title}
              linkProperties={{
                className: styles.NavigationLink,
                href: navLink.link,
                key: navLink.title,
              }}
            >
              {navLink.title}
            </LinkComponent>
          );
        })}
      </nav>
      <div className={styles.CseSearch}>
        <Script src="https://cse.google.com/cse.js?cx=1040596e09bea9882" />
        <div className="gcse-search" />
      </div>
    </>
  );
};
