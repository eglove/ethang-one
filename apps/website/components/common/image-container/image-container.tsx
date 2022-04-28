import { ImageProps } from 'next/image';

import { Image as ImageModel } from '../../../../../libs/local-database/src/lib/models/image';
import { ImageComponent } from '../image-component/image-component';
import styles from './image-container.module.css';

// Require alt
interface ImagePropertiesRequired extends ImageProps {
  alt: string;
}

interface ImageContainerProperties {
  image: ImageModel;
  imageProperties?: ImagePropertiesRequired;
}

export function ImageContainer({
  image,
  imageProperties,
}: ImageContainerProperties): JSX.Element {
  return (
    <div className={styles.Center}>
      <ImageComponent image={image} imageProperties={imageProperties} />
    </div>
  );
}
