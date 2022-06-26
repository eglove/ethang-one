import { gql } from '@apollo/client';

export const USER_SIGN_IN = gql`
  query UserSignIn($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;
