import { Button, ReactToPdf } from '@ethang/react-components';
import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';
import { useRef } from 'react';

import { HeadTag } from '../common/head-tag/head-tag';
import styles from './resume-layout.module.css';
import { ResumeMain } from './resume-main';
import { ResumeSidebar } from './resume-sidebar';

export function ResumeLayout(): JSX.Element {
  const resumeElement = useRef<HTMLDivElement>();
  const today = new Date().toLocaleDateString().replace(/\//g, '-');

  useKnuthPlassLineBreaks('p');

  const downloadPdf = ({ toPdf }: { toPdf: () => void }): JSX.Element => {
    return (
      <div className={styles.DownloadButtonContainer}>
        <Button
          buttonProperties={{ onClick: toPdf }}
          size="small"
          text="Download"
        />
      </div>
    );
  };

  return (
    <>
      <ReactToPdf<JSX.Element, HTMLDivElement>
        downloadContainer={downloadPdf}
        filename={`Ethan_Glover_Resume_${today}`}
        targetReferences={[resumeElement]}
      />
      <div className={styles.BorderContainer}>
        <div className={styles.ResumeContainer} ref={resumeElement}>
          <HeadTag title="Resume" />
          <ResumeSidebar />
          <ResumeMain />
        </div>
      </div>
    </>
  );
}
