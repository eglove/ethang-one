import { NextLink } from '@ethang/react-components';
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
    <div ref={slideReference}>
      <Head>
        <title>Render Patterns</title>
      </Head>
      <div className={`${styles.DefaultContainer}`} {...containerProperties}>
        {children}
      </div>
      <div className={styles.SlideButtons}>
        {typeof previousSlide !== 'undefined' && (
          <NextLink linkProperties={{ href: previousSlide }}>
            Previous Slide
          </NextLink>
        )}
        {typeof nextSlide !== 'undefined' && (
          <NextLink linkProperties={{ href: nextSlide }}>Next Slide</NextLink>
        )}
      </div>
    </div>
  );
}
