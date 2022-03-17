import { gql } from '@apollo/client';

import { Blog } from '../graphql/types';
import { apolloClient } from '../pages/_app';

export interface BlogProperties {
  blog: Blog;
}

export const blogQuery = async (slug: string): Promise<Blog> => {
  const { data } = await apolloClient.client.query<{ blog: Blog }>({
    query: gql`
      query BlogQuery($slug: String) {
        blog(slug: $slug) {
          authors {
            items {
              firstName
              lastName
            }
          }
          featuredImage {
            altText
            height
            width
            image {
              downloadUrl
            }
          }
          createdAt
          description
          orderDate
          title
          slug
          updatedAt
        }
      }
    `,
    variables: {
      slug,
    },
  });

  return data.blog;
};
