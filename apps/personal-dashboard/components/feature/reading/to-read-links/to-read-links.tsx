import { useQuery } from '@apollo/client';
import { NextLink } from '@ethang/react-components';

import styles from './to-read-links.module.css';
import { TO_READ_LINKS, ToReadLinksReturn } from './to-read-links-graphql';

export function ToReadLinks(): JSX.Element {
  const { data } = useQuery<ToReadLinksReturn>(TO_READ_LINKS);

  if (typeof data === 'undefined') {
    return null;
  }

  const handleChecked = (id: string, url: string): void => {
    const checkbox = document.querySelector(`#a${id}`);
    const checked = 'background-color: lightgrey;';
    const unchecked = 'background-color: inherit;';

    const current = checkbox.getAttribute('style');
    checkbox.setAttribute('style', current === checked ? unchecked : checked);
  };

  return (
    <div className={styles.ToReadLinksContainer}>
      {data.toReadLinks.map(link => {
        return (
          <div className={styles.ToReadLinkInputContainer} key={link.id}>
            <div
              className={styles.ToReadLinkCheckbox}
              id={`a${link.id}`}
              role="button"
              tabIndex={0}
              onClick={(): void => {
                handleChecked(link.id, link.url);
              }}
              onKeyDown={(): void => {
                handleChecked(link.id, link.url);
              }}
            />
            <NextLink linkProperties={{ href: link.url }}>
              {link.title}
            </NextLink>
          </div>
        );
      })}
    </div>
  );
}

export default ToReadLinks;
