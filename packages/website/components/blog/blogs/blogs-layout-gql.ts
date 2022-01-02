import {gql} from '@apollo/client';

export const blogsQuery = gql`
  query BlogsQuery($orderBy: [BlogOrderByWithRelationInput!]) {
    blogs(orderBy: $orderBy) {
      id
      title
      slug
      imageId
      featuredImage {
        url
        altText
        width
        height
      }
      authors {
        author {
          firstName
          lastName
        }
      }
      updatedAt
      createdAt
    }
  }
`;
