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
    <nav className={styles.Navigation as string}>
      {navLinks.map(navLink => {
        return (
          <LinkComponent
            key={navLink.title}
            linkProperties={{
              className: styles.NavigationLink as string,
              href: navLink.link,
              key: navLink.title,
            }}
          >
            {navLink.title}
          </LinkComponent>
        );
      })}
    </nav>
  );
};
