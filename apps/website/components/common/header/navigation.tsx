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
    <div>
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
      <script async src="https://cse.google.com/cse.js?cx=1040596e09bea9882" />
      <div className="gcse-search" />
    </div>
  );
};
