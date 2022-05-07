import { uuid } from '@ethang/util-typescript';

import styles from './breadcrumbs.module.css';
import { Crumb } from './crumb';

export type LinkProperties = {
  href: string;
  label: string;
} & JSX.IntrinsicElements['a'];

interface BreadcrumbsProperties {
  links: LinkProperties[];
}

export function Breadcrumbs({ links }: BreadcrumbsProperties): JSX.Element {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        itemScope
        className={styles.BreadCrumbs}
        itemType="https://schema.org/BreadcrumbList"
      >
        {links.map((link, index) => {
          return <Crumb key={uuid()} link={link} position={index} />;
        })}
      </ol>
    </nav>
  );
}
