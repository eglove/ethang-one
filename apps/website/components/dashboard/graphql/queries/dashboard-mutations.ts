import { gql } from '@apollo/client';
import { CalorieRecord } from '@ethang/prisma-nestjs-graphql';

export type AddCalorie = Pick<CalorieRecord, 'id'>;
export const ADD_CALORIE = gql`
  mutation AddCalorie(
    $userId: String!
    $caloriesToAdd: Float!
    $weight: Float!
  ) {
    addCalorieRecord(
      userId: $userId
      caloriesToAdd: $caloriesToAdd
      weight: $weight
    ) {
      id
    }
  }
`;

export const CREATE_FINANCE_RECORDS = gql`
  mutation CreateFinanceRecords($data: [FinanceRecordCreateManyInput!]!) {
    createFinanceRecords(data: $data) {
      count
    }
  }
`;

export const CREATE_HABIT = gql`
  mutation CreateHabit($data: HabitCreateInput!) {
    createHabit(data: $data) {
      id
    }
  }
`;

export const UPDATE_HABIT = gql`
  mutation UpdateHabit(
    $data: HabitUpdateInput!
    $where: HabitWhereUniqueInput!
  ) {
    updateHabit(data: $data, where: $where) {
      id
    }
  }
`;
