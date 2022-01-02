import {gql} from '@apollo/client';

export const homeQuery = gql`
  query TechnologyLogos($where: TechnologyLogoWhereInput) {
    technologyLogos(where: $where) {
      logo {
        url
        altText
        height
        width
      }
    }
  }
`;
