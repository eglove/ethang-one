import { gql } from '@apollo/client';

import { imageFragments } from './fragments/image-fragments';
import { Image, TechnologyLogo } from './types';

export const homePageQueryVariables = (
  isOnHomePage = true
): Record<string, unknown> => {
  return {
    where: {
      isOnHomepage: {
        _eq: isOnHomePage,
      },
    },
  };
};

export type HomePageQuery = {
  TechnologyLogo: Array<
    Pick<TechnologyLogo, 'id'> & {
      Image: Pick<Image, 'altText' | 'height' | 'id' | 'url' | 'width'>;
    }
  >;
};

export const homePageQuery = gql`
  ${imageFragments}
  query HomePageQuery($where: TechnologyLogo_bool_exp) {
    TechnologyLogo(where: $where) {
      id
      Image {
        ...ImageData
      }
    }
  }
`;
