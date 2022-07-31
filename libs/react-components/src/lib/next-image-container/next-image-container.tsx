import { Image as ImageModel } from '@ethang/local-database';
import { ImageProps } from 'next/image';
import { HTMLAttributes } from 'react';

import { NextImageComponent } from '../next-image-component/next-image-component';
import styles from './next-image-container.module.css';

// Require alt
type ImagePropertiesRequired = {
  alt: string;
} & ImageProps;

type ImageContainerProperties = {
  containerProperties?: HTMLAttributes<HTMLDivElement>;
  image: ImageModel;
  imageProperties?: ImagePropertiesRequired;
};

export function NextImageContainer({
  containerProperties,
  image,
  imageProperties,
}: ImageContainerProperties): JSX.Element {
  return (
    <div className={styles.Center} {...containerProperties}>
      <NextImageComponent image={image} imageProperties={imageProperties} />
    </div>
  );
}
