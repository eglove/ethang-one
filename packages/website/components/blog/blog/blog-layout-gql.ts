import {gql} from '@apollo/client';

export const blogQuery = gql`
  query BlogQuery($where: BlogWhereUniqueInput!) {
    blog(where: $where) {
      createdAt
      updatedAt
      title
      content
      imageId
      Image {
        url
        width
        altText
        height
      }
      BlogAuthor {
        Person {
          firstName
          lastName
        }
      }
    }
  }
`;
