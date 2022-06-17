import { Button, NextLink } from '@ethang/react-components';
import Head from 'next/head';
import { HTMLAttributes, useRef } from 'react';

import styles from '../styles/render-presentation.module.css';

interface PresentationWrapperProperties {
  children: JSX.Element | JSX.Element[];
  containerProperties?: HTMLAttributes<HTMLDivElement>;
  nextSlide?: string;
  previousSlide?: string;
}

export const slideLink = (slideNumber: number): string => {
  return `/slides/slide-${slideNumber}`;
};

export function PresentationWrapper({
  containerProperties,
  children,
  nextSlide,
  previousSlide,
}: PresentationWrapperProperties): JSX.Element {
  const slideReference = useRef<HTMLDivElement>();

  return (
    <div
      ref={slideReference}
      style={{
        backgroundColor: 'hsl(0deg 0% 96%)',
        fontSize: '1.3rem',
        lineHeight: '24px',
        margin: 'auto',
        maxWidth: '1000px',
        padding: '16px',
      }}
    >
      <Head>
        <title>Render Patterns</title>
      </Head>
      <div className={`${styles.DefaultContainer}`} {...containerProperties}>
        {children}
      </div>
      <div style={{ borderBottom: '1px solid black', margin: '1rem' }} />
      <div className={styles.SlideButtons}>
        {typeof previousSlide !== 'undefined' && (
          <NextLink linkProperties={{ href: previousSlide }}>
            <Button size="small" text="Previous Slide" />
          </NextLink>
        )}
        {typeof nextSlide !== 'undefined' && (
          <NextLink linkProperties={{ href: nextSlide }}>
            <Button size="small" text="Next Slide" />
          </NextLink>
        )}
      </div>
    </div>
  );
}
