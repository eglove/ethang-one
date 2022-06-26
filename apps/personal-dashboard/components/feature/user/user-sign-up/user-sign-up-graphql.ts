import { gql } from '@apollo/client';

export const USER_SIGN_UP = gql`
  mutation UserSignUp($email: String!, $password: String!) {
    signup(email: $email, password: $password)
  }
`;
