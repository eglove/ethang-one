import { Button, Container, ReactToPdf } from '@ethang/react-components';
import Image from 'next/image';
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import { HeadTag } from '../common/head-tag/head-tag';
import styles from './presume-layout.module.css';

export function PresumeLayout(): JSX.Element {
  const [applyingFor, setApplyingFor] = useState('');
  const resumeElement = useRef<HTMLDivElement>();
  const coverLetterElement = useRef<HTMLDivElement>();

  const today = new Date().toLocaleDateString().replace(/\//g, '-');

  return (
    <PresumeView
      applyingFor={applyingFor}
      coverLetterElement={coverLetterElement}
      resumeElement={resumeElement}
      setApplyingFor={setApplyingFor}
      today={today}
    />
  );
}

type PresumeViewProperties = {
  applyingFor: string;
  coverLetterElement: MutableRefObject<HTMLDivElement>;
  resumeElement: MutableRefObject<HTMLDivElement>;
  setApplyingFor: Dispatch<SetStateAction<string>>;
  today: string;
};

function PresumeView({
  applyingFor,
  coverLetterElement,
  resumeElement,
  setApplyingFor,
  today,
}: PresumeViewProperties): JSX.Element {
  const downloadResume = ({ toPdf }: { toPdf: () => void }): JSX.Element => {
    return (
      <Button
        buttonProperties={{ onClick: toPdf }}
        size="small"
        text="Download Resume"
      />
    );
  };

  return (
    <Container>
      <div className={styles.FormContainer}>
        <label htmlFor="applyingFor">Position Applying For: </label>
        <input
          name="applyingFor"
          type="text"
          value={applyingFor}
          onChange={(event): void => {
            setApplyingFor(event.target.value);
          }}
        />
      </div>
      <div className={styles.DownloadButtonContainer}>
        <ReactToPdf<JSX.Element, HTMLDivElement>
          downloadContainer={downloadResume}
          filename={`Percie_Pelias_Resume_${today}`}
          targetReferences={[resumeElement, coverLetterElement]}
        />
      </div>
      <div className={styles.BorderContainer}>
        <div ref={resumeElement}>
          <div className={styles.PresumeContainer}>
            <HeadTag title="Presume" />
            <div className={styles.PresumeHeader}>
              <div>
                <h1>PERCIE JOY A. PELIAS</h1>
                <div>purok 6, Barangay 22-A Gingoog City 9000</div>
                <div>09369517699</div>
                <div>peliaspercie25@gmail.com</div>
              </div>
              <div
                style={{ height: '150px', position: 'relative', width: 'auto' }}
              >
                <Image
                  priority
                  alt="Percie Pelias"
                  layout="fill"
                  objectFit="contain"
                  src="/images/presume/profile-picture.jpg"
                />
              </div>
            </div>
            <div className={styles.PresumeItem}>
              <h2>Objective</h2>
              <p>
                To work hard with full determination and dedication to achieve
                organizational and personal goals. To use my organizational
                skills, educational background and ability to work with people.
              </p>
            </div>
            <div className={styles.PresumeItem}>
              <h2>Academic Details</h2>
              <div>
                <p>
                  <strong>Bukindnon State University</strong>
                </p>
                <p>
                  Bachelor of Science in Business Administration Major in
                  Financial Management, Tertiary, 2017
                </p>
                <p>
                  Gingoog City Comprehensive National High School, Secondary,
                  2013
                </p>
                <p>Don Restituto Baol Central School, Primary, 2009</p>
              </div>
            </div>
            <div className={styles.PresumeItem}>
              <h2>Work Experience</h2>
              <div>
                <p>
                  <strong>Uniglo Store</strong>
                </p>
                <p>SM Downtown Premier Cagayan De Oro, Oct. 2021 - Apr. 2022</p>
                <p>
                  <strong>Bagel Girl</strong>
                </p>
                <p>SM Uptown Cagayan De Oro, Sep 2019 - Mar 2020</p>
                <p>Role: Sales Associate</p>
              </div>
            </div>
            <div className={styles.PresumeItem}>
              <h2>Personal Details</h2>
              <div>
                <p>Date of Birth: December 19, 1994</p>
                <p>Age: 27 Years Old</p>
                <p>Sex: Female</p>
                <p>Height: 5&apos;2&quot;</p>
                <p>Weight: 45kls</p>
                <p>Citizenship: Filipino</p>
                <p>Legal Status: Single</p>
                <p>Religion: Roman Catholic</p>
                <p>Language Spoken: Tagalog, English, Bisaya</p>
              </div>
            </div>
            <div className={styles.PresumeItem}>
              <h2>Skills</h2>
              <div>
                <p>
                  Computer Literate M.S. Office (Excel, Word and PowerPoint)
                </p>
                <p>Communication: Comfortable in writing and speaking</p>
                <p>Languages: Tagalog, English, Bisaya</p>
              </div>
            </div>
          </div>
        </div>
        <div ref={coverLetterElement}>
          <div className={styles.PresumeContainer}>
            <div className={styles.PresumeCoverLetter}>
              <h2 style={{ textAlign: 'center' }}>Cover Letter</h2>
              <br />
              <br />
              <br />
              <p>Dear Sir/Madam,</p>
              <p>
                &emsp;&emsp;&emsp;I hereby submit my application for the
                position of {applyingFor}.
              </p>
              <p>
                &emsp;&emsp;&emsp;I offer a useful combination of academic
                education and broad work experience as well as my characters of
                high integrity, loyalty, ability to learn and work very hard.
              </p>
              <p>
                &emsp;&emsp;&emsp;A bit about myself: I’m 27 years old,
                graduated in Business Administration - Major in Financial
                Management. I have retail experience with expanded
                responsibilities which included sales, arranging newly arrived
                products, doing stock inventory, administrative work and also
                cashiering.
              </p>
              <p>
                &emsp;&emsp;&emsp;I’m happy to come over for an interview and
                discuss how I can be of value.
              </p>
              <p>
                &emsp;&emsp;&emsp;You may contact me with my mobile number
                09369517699
              </p>
              <p>Looking forward to hearing from you.</p>
              <p>Respectfully Yours,</p>
              <p>PERCIE JOY A. PELIAS</p>
              <p>APPLICANT</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
