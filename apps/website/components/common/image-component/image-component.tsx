import { ImageProps } from 'next/image';

import { Image as ImageModel } from '../../../db/models/image';

interface ImageComponentProperties {
  image: ImageModel;
  imageProperties?: Partial<ImageProps>;
}

export function ImageComponent({
  image,
  imageProperties,
}: ImageComponentProperties): JSX.Element {
  return (
    <img
      alt={image.altText}
      height={image.height}
      // @ts-expect-error This should accept string
      src={image.url}
      width={image.width}
      {...imageProperties}
    />
  );
}
