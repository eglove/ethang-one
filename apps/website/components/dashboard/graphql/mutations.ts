import { gql } from '@apollo/client';

export const createHabit = gql`
  mutation CreateHabit(
    $name: String!
    $dueDate: Date!
    $recurInterval: String!
  ) {
    habitCreate(
      data: { name: $name, dueDate: $dueDate, recurInterval: $recurInterval }
    ) {
      id
    }
  }
`;

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

export const updateFinanceRecords = gql`
  mutation UpdateFinanceRecords($data: [FinanceRecordCreateManyInput]!) {
    financeRecordCreateMany(data: $data) {
      count
    }
  }
`;
