import Image, { ImageProps } from 'next/image';

import styles from './image-container.module.css';

// Require alt
interface ImagePropertiesRequired extends ImageProps {
  alt: string;
}

interface ImageContainerProperties {
  imageProperties: ImagePropertiesRequired;
}

export function ImageContainer({
  imageProperties,
}: ImageContainerProperties): JSX.Element {
  return (
    <div className={styles.Center}>
      <Image {...imageProperties} />
    </div>
  );
}
