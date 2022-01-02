import {gql} from '@apollo/client';

export const blogsQuery = gql`
  query BlogsQuery($orderBy: [BlogOrderByWithRelationInput!]) {
    blogs(orderBy: $orderBy) {
      id
      title
      slug
      imageId
      Image {
        url
        altText
        width
        height
      }
      BlogAuthor {
        Person {
          firstName
          lastName
        }
      }
      updatedAt
      createdAt
    }
  }
`;
