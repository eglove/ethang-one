import styles from './resume-layout.module.css';

interface ResumeJobHeadingProperties {
  company: string;
  dateRange: string;
  jobTitle: string;
  location: string;
}

export function ResumeJobHeading({
  company,
  dateRange,
  jobTitle,
  location,
}: ResumeJobHeadingProperties): JSX.Element {
  return (
    <div className={styles.JobHeading}>
      <div>
        {dateRange} {jobTitle}
      </div>
      <div>
        {company} | {location}
      </div>
    </div>
  );
}
