import { gql } from '@apollo/client';

export const updateHeight = gql`
  mutation UpdateHeight($id: ID!, $height: Float) {
    personUpdate(filter: { id: $id }, data: { heightIn: $height }) {
      heightIn
    }
  }
`;

export const updateWeight = gql`
  mutation UpdateWeight($id: ID!, $weight: Float) {
    personUpdate(filter: { id: $id }, data: { weightLbs: $weight }) {
      heightIn
    }
  }
`;
