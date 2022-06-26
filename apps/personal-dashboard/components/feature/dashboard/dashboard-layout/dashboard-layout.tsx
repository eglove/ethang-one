import { Button } from '@ethang/react-components';
import { useRouter } from 'next/router';

import styles from './index.module.css';

const sectionButtons = [
  {
    href: '/reading',
    text: 'My Reading',
  },
];

export function DashboardLayout(): JSX.Element {
  const router = useRouter();

  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.Reading}>
        {sectionButtons.map(button => {
          return (
            <Button
              key={button.text}
              size="medium"
              text={button.text}
              buttonProperties={{
                className: styles.ButtonContainer,
                async onClick(): Promise<void> {
                  await router.push(button.href);
                },
              }}
            />
          );
        })}
      </div>
      <div className={styles.Health}>Health</div>
      <div className={styles.Finance}>Finance</div>
      <div className={styles.Routine}>Routine</div>
      <div className={styles.OnlineEducation}>OnlineEducation</div>
    </div>
  );
}
