import { Button } from '@ethang/react-components';
import { useKnuthPlassLineBreaks } from '@ethang/react-hooks';
import { jsPDF } from 'jspdf';
import { useRef } from 'react';

import { HeadTag } from '../common/head-tag/head-tag';
import styles from './resume-layout.module.css';
import { ResumeMain } from './resume-main';
import { ResumeSidebar } from './resume-sidebar';

export function ResumeLayout(): JSX.Element {
  const resumeElement = useRef<HTMLDivElement>();
  useKnuthPlassLineBreaks('p');

  const getPdf = async (): Promise<void> => {
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    await pdf.html(resumeElement.current, {
      callback(document) {
        document.save();
      },
      html2canvas: {
        backgroundColor: 'hsl(0deg 0% 95%)',
        imageTimeout: 10_000,
        scale: 0.7496,
      },
    });
  };

  return (
    <>
      <div className={styles.DownloadButtonContainer}>
        <Button
          buttonProperties={{ onClick: getPdf }}
          size="small"
          text="Download"
        />
      </div>
      <div className={styles.BorderContainer}>
        <div className={styles.ResumeContainer} id="resume" ref={resumeElement}>
          <HeadTag title="Resume" />
          <ResumeSidebar />
          <ResumeMain />
        </div>
      </div>
    </>
  );
}
