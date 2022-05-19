import { uuid } from '@ethang/util-typescript';

import styles from './resume-layout.module.css';

interface ResumeJobDetailsProperties {
  detailPoints: string[];
}

export function ResumeJobDetails({
  detailPoints,
}: ResumeJobDetailsProperties): JSX.Element {
  return (
    <ul className={styles.JobDetails}>
      {detailPoints.map(detailPoint => {
        return <li key={uuid()}>{detailPoint}</li>;
      })}
    </ul>
  );
}
