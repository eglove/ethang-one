import { gql } from '@apollo/client';

import { blogData, BlogMetaDataType } from './fragments/blog-fragments';
import { ImageDataType, imageFragments } from './fragments/image-fragments';
import { personFragments, PersonNameType } from './fragments/person-fragments';
import { BlogAuthor } from './types';

export type BlogsQuery = {
  Blog: Array<
    BlogMetaDataType & {
      BlogAuthors: Array<
        Pick<BlogAuthor, 'id'> & {
          Person: PersonNameType;
        }
      >;
      Image: ImageDataType;
    }
  >;
};

export const blogsQuery = gql`
  ${blogData}
  ${imageFragments}
  ${personFragments}
  query BlogsQuery {
    Blog(order_by: { createdAt: desc }) {
      BlogAuthors {
        id
        Person {
          ...PersonName
        }
      }
      Image {
        ...ImageData
      }
      ...BlogMetaData
    }
  }
`;
