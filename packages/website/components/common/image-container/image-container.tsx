import Image, { ImageProps } from 'next/image';

import styles from './image-container.module.css';

// Require alt
interface ImagePropertiesRequired extends ImageProps {
  alt: string;
}

interface ImageContainerProperties {
  imageProperties: ImagePropertiesRequired;
}

export const ImageContainer = ({
  imageProperties,
}: ImageContainerProperties): JSX.Element => {
  return (
    <div className={styles.Center as string}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image {...imageProperties} />
    </div>
  );
};