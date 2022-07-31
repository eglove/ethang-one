import { gql } from '@apollo/client';

export const personTypeDefinitions = gql`
  type Person {
    id: String
    firstName: String
    lastName: String
    weightInKg: Float
    heightInCm: Float
    age: Int
    caloriesLeftToday: Int
  }
`;
