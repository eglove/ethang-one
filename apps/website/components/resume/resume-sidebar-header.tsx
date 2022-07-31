import styles from './resume-layout.module.css';

type ResumeSidebarHeaderProperties = {
  text: string;
};

export function ResumeSidebarHeader({
  text,
}: ResumeSidebarHeaderProperties): JSX.Element {
  return (
    <h2 className={styles.Header}>
      <span className={styles.HeaderLine}>{text}</span>
    </h2>
  );
}
