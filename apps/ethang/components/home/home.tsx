import { NextLink } from '@ethang/react-components';

import styles from './home.module.css';

export const Home = (): JSX.Element => {
  return (
    <div className={styles.CommandContainer}>
      <NextLink linkProperties={{ href: '/build-run-projects' }}>
        <div>Build or Run Project(s)</div>
      </NextLink>
      <div>Generate Git History</div>
      <div>Project Generate (New Component, New Page, etc.)</div>
      <div>Manage NPM dependencies.</div>
      <div>Manage Project List (Create New, Remove, etc.)</div>
    </div>
  );
};
