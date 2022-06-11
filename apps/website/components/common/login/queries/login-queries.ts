import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  query SignIn($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;
