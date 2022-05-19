import { Button } from '@ethang/react-components';
import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';
import { useMemo, useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

import { HeadTag } from '../common/head-tag/head-tag';
import styles from './resume-layout.module.css';
import { ResumeMain } from './resume-main';
import { ResumeSidebar } from './resume-sidebar';

export function ResumeLayout(): JSX.Element {
  const resumeElement = useRef<HTMLDivElement>();
  const today = useMemo(() => {
    return new Date().toLocaleDateString().replaceAll('/', '-');
  }, []);

  useKnuthPlassLineBreaks('p');

  const downloadPdf = ({
    toPdf,
  }: {
    toPdf: () => void;
  }): JSX.IntrinsicElements['div'] => {
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
      <ReactToPdf
        filename={`Ethan_Glover_Resume_${today}`}
        targetRef={resumeElement}
      >
        {downloadPdf}
      </ReactToPdf>
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
