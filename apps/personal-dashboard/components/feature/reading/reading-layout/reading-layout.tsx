import { Button } from '@ethang/react-components';
import { useRouter } from 'next/router';

import ToReadLinks from '../to-read-links/to-read-links';
import styles from './reading-layout.module.css';

export function ReadingLayout(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.MyReadingHeader}>My Reading</h2>
      <div className={styles.AddLink}>
        <Button
          size="small"
          text="Add Link"
          buttonProperties={{
            async onClick(): Promise<void> {
              await router.push('/reading/create');
            },
          }}
        />
      </div>
      <ToReadLinks />
    </>
  );
}

export default ReadingLayout;
