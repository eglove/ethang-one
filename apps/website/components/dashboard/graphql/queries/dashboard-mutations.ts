import { gql } from '@apollo/client';

export const CREATE_FINANCE_RECORDS = gql`
  mutation CreateFinanceRecords($data: [FinanceRecordCreateManyInput!]!) {
    createFinanceRecords(data: $data) {
      count
    }
  }
`;
