import { gql } from '@apollo/client';

export const DUE_HABITS = gql`
  query DueHabits($dueDate: DateTime) {
    habits(where: { dueDate: { lte: $dueDate } }) {
      name
      dueDate
    }
  }
`;

export const FINANCE_RECORDS = gql`
  query FinanceRecords($from: DateTime, $to: DateTime) {
    financeRecords(where: { recordedDate: { gte: $from, lte: $to } }) {
      accountName
    }
  }
`;