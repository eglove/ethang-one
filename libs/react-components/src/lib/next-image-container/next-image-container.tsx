import { Image as ImageModel } from '@ethang/local-database';
import { ImageProps } from 'next/image';

import { NextImageComponent } from '../next-image-component/next-image-component';
import styles from './next-image-container.module.css';

// Require alt
interface ImagePropertiesRequired extends ImageProps {
  alt: string;
}

interface ImageContainerProperties {
  image: ImageModel;
  imageProperties?: ImagePropertiesRequired;
}

export function NextImageContainer({
  image,
  imageProperties,
}: ImageContainerProperties): JSX.Element {
  return (
    <div className={styles.Center}>
      <NextImageComponent image={image} imageProperties={imageProperties} />
    </div>
  );
}
