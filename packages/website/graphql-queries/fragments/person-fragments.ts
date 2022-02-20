import { gql } from '@apollo/client';

import { Person } from '../types';

export type PersonNameType = Pick<Person, 'firstName' | 'lastName'>;

export const personFragments = gql`
  fragment PersonName on Person {
    firstName
    lastName
  }
`;
