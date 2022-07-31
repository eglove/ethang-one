import { Image as ImageModel } from '@ethang/local-database';
import Image, { ImageProps } from 'next/image';

type ImageComponentProperties = {
  image: ImageModel;
  imageProperties?: Partial<ImageProps>;
};

export function NextImageComponent({
  image,
  imageProperties,
}: ImageComponentProperties): JSX.Element {
  return (
    <Image
      alt={image.altText}
      height={image.height}
      src={image.url}
      width={image.width}
      {...imageProperties}
    />
  );
}
