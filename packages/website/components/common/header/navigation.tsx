import {LinkComponent} from '../link-component/link-component';
import styles from './header.module.css';

export const Navigation = (): JSX.Element => {
  const navLinks = [
    {
      link: '/portfolio',
      title: 'Portfolio',
    },
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
    <nav className={styles.Navigation}>
      {navLinks.map(navLink => (
        <LinkComponent
          key={navLink.title}
          className={styles.NavigationLink}
          href={navLink.link}
          content={navLink.title}
        />
      ))}
    </nav>
  );
};
