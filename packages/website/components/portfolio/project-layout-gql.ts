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
      Image {
        url
        altText
        width
        height
      }
      ProjectContributor {
        Person {
          firstName
          lastName
        }
      }
    }
  }
`;
