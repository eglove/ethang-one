import {gql} from '@apollo/client';

export const portfoliosLayoutQuery = gql`
  query PortfoliosLayoutQuery {
    projects {
      id
      name
      githubUrl
      slug
      projectUrl
      summary
      imageId
      featuredImage: Image {
        url
        altText
        width
        height
      }
    }
  }
`;
