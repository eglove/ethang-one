import { gql } from '@apollo/client';

import { Blog } from '../types';

export type BlogDataType = Pick<
  Blog,
  'content' | 'createdAt' | 'imageId' | 'title' | 'updatedAt'
>;

export type BlogMetaDataType = Pick<
  Blog,
  'createdAt' | 'id' | 'imageId' | 'slug' | 'title' | 'updatedAt'
>;

export const blogData = gql`
  fragment BlogMetaData on Blog {
    createdAt
    id
    imageId
    slug
    title
    updatedAt
  }

  fragment BlogData on Blog {
    content
    createdAt
    imageId
    title
    updatedAt
  }
`;
