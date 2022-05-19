import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';

import { ResumeJobDetails } from './resume-job-details';
import { ResumeJobHeading } from './resume-job-heading';

interface ResumeJobProperties {
  company: string;
  dateRange: string;
  jobDetails: string[];
  jobTitle: string;
  location: string;
}

export function ResumeJob({
  company,
  dateRange,
  jobDetails,
  jobTitle,
  location,
}: ResumeJobProperties): JSX.Element {
  useKnuthPlassLineBreaks('li');

  return (
    <>
      <ResumeJobHeading
        company={company}
        dateRange={dateRange}
        jobTitle={jobTitle}
        location={location}
      />
      <ResumeJobDetails detailPoints={jobDetails} />
    </>
  );
}
