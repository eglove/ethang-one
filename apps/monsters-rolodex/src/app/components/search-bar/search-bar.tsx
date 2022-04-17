import { ChangeEvent } from 'react';

import styles from './search-bar.module.css';

interface SearchBarProperties {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({
  onChangeHandler,
}: SearchBarProperties): JSX.Element {
  return (
    <input
      className={styles['SearchBarContainer']}
      placeholder="Search monsters."
      type="search"
      onChange={onChangeHandler}
    />
  );
}
