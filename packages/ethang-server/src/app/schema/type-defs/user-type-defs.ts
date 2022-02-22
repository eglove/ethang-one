import { gql } from '@apollo/client';

export const userTypeDefs = gql`
  type User {
    id: String!
    createdAt: Date!
    updatedAt: Date!
    username: String!
    password: String!
    personId: String!
    role: Role!
    Person: Person!
  }

  type UserWhereUniqueInput {
    id: String
    username: String
    username_password: UserUsernamePasswordCompoundUniqueInput
  }

  type UserUsernamePasswordCompoundUniqueInput {
    username: String!
    password: String!
  }
`;
