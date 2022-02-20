import { gql } from '@apollo/client';

import { Image } from '../types';

export type ImageDataType = Pick<Image, 'altText' | 'height' | 'url' | 'width'>;

export const imageFragments = gql`
  fragment ImageData on Image {
    altText
    height
    id
    url
    width
  }
`;
