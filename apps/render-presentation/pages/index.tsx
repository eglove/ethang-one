import { NextImageContainer } from '@ethang/react-components';

import {
  PresentationWrapper,
  slideLink,
} from '../components/presentation-wrapper';
import styles from '../styles/render-presentation.module.css';

export function Index(): JSX.Element {
  return (
    <PresentationWrapper
      nextSlide={slideLink(1)}
      containerProperties={{
        className: `${styles.TwoColumnCenter}`,
      }}
    >
      <>
        <h1>Render Patterns</h1>
        <NextImageContainer
          image={{
            altText: 'Static vs Dynamic',
            height: 675,
            url: 'https://res.cloudinary.com/eglove/image/upload/v1655330404/hidden/presentation/static-vs-dynamic.webp',
            width: 1200,
          }}
        />
      </>
    </PresentationWrapper>
  );
}

export default Index;
