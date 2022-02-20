import { gql } from '@apollo/client';

import { blogData, BlogDataType } from './fragments/blog-fragments';
import { ImageDataType, imageFragments } from './fragments/image-fragments';
import { personFragments, PersonNameType } from './fragments/person-fragments';
import { BlogAuthor } from './types';

export type BlogQuery = {
  Blog: Array<
    BlogDataType & {
      BlogAuthors: Array<
        Pick<
          BlogAuthor,
          'id' & {
            Person: PersonNameType;
          }
        >
      >;
      Image: ImageDataType;
    }
  >;
};

export const blogQueryVariables = (slug: string): Record<string, unknown> => {
  return {
    where: {
      slug: {
        _eq: slug,
      },
    },
  };
};

export const blogQuery = gql`
  ${blogData}
  ${imageFragments}
  ${personFragments}
  query BlogQuery($where: Blog_bool_exp) {
    Blog(where: $where) {
      BlogAuthors {
        id
        Person {
          ...PersonName
        }
      }
      Image {
        ...ImageData
      }
      ...BlogData
    }
  }
`;
