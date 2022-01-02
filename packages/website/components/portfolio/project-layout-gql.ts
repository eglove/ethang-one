import {gql} from '@apollo/client';

export const projectLayoutQuery = gql`
  query ProjectLayoutQuery($where: ProjectWhereUniqueInput!) {
    project(where: $where) {
      createdAt
      updatedAt
      githubUrl
      projectUrl
      summary
      name
      imageId
      id
      featuredImage {
        url
        altText
        width
        height
      }
      contributors {
        contributor {
          firstName
          lastName
        }
      }
    }
  }
`;
