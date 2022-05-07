import { NextLink } from '../next-link/next-link';
import { LinkProperties } from './breadcrumbs';
import styles from './breadcrumbs.module.css';

interface CrumbProperties {
  link: LinkProperties;
  position: number;
}

export function Crumb({ link, position }: CrumbProperties): JSX.Element {
  return (
    <li
      itemScope
      className={styles.Crumb}
      itemProp="itemListElement"
      itemType="https://schema.org/ListItem"
    >
      <NextLink linkProperties={{ itemProp: 'item', ...link }}>
        <span itemProp="name">{link.label}</span>
      </NextLink>
      <meta content={String(position)} itemProp="position" />
    </li>
  );
}
