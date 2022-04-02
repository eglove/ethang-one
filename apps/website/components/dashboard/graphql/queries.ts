import { gql } from '@apollo/client';

export const calorieData = gql`
  query MyData($id: ID!) {
    person(id: $id) {
      firstName
      lastName
      birthday
      weightLbs
      heightIn
    }
  }
`;
