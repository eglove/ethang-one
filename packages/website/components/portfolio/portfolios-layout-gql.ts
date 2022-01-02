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
      featuredImage {
        url
        altText
        width
        height
      }
    }
  }
`;
