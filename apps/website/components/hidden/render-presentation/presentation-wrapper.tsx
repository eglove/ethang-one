import { Button, Container, NextLink } from '@ethang/react-components';
import { useFullscreen } from '@ethang/react-hooks';
import { HTMLAttributes, useRef } from 'react';

import styles from '../../../pages/hidden/render-presentation/render-presentation.module.css';

interface PresentationWrapperProperties {
  children: JSX.Element;
  containerProperties?: HTMLAttributes<HTMLDivElement>;
  nextSlide?: string;
  previousSlide?: string;
}

export const slideLink = (name: string): string => {
  return `/hidden/render-presentation/${name}`;
};

export function PresentationWrapper({
  containerProperties,
  children,
  nextSlide,
  previousSlide,
}: PresentationWrapperProperties): JSX.Element {
  const slideReference = useRef<HTMLDivElement>();
  const { toggle, fullScreen } = useFullscreen(slideReference);

  return (
    <Container containerProperties={{ ref: slideReference }}>
      <div
        className={styles.SlideButtons}
        style={fullScreen ? { display: 'none' } : { display: 'grid' }}
      >
        <Button
          buttonProperties={{ onClick: toggle }}
          size="small"
          text="Toggle Fullscreen"
        />
      </div>
      <div {...containerProperties} className={styles.DefaultContainer}>
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
    </Container>
  );
}
