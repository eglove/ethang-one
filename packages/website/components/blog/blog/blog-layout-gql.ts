import {gql} from '@apollo/client';

export const blogQuery = gql`
  query BlogQuery($where: BlogWhereUniqueInput!) {
    blog(where: $where) {
      createdAt
      updatedAt
      title
      content
      imageId
      featuredImage {
        url
        width
        altText
        height
      }
      authors {
        author {
          firstName
          lastName
        }
      }
    }
  }
`;
