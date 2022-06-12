import { gql } from '@apollo/client';
import { CalorieRecord, Person } from '@ethang/prisma-nestjs-graphql';
import { beforeMidnight } from '@ethang/util-typescript';

export const allHabitsDefaultVariables = {
  orderBy: {
    name: 'asc',
  },
};

export const dueHabitsDefaultVariables = {
  dueDate: beforeMidnight(),
  orderBy: { name: 'asc' },
};

export const ALL_HABITS = gql`
  query AllHabits($orderBy: [HabitOrderByWithRelationInput!]) {
    habits(orderBy: $orderBy) {
      id
      name
      dueDate
      recurInterval
    }
  }
`;

export const DUE_HABITS = gql`
  query DueHabits(
    $dueDate: DateTime
    $orderBy: [HabitOrderByWithRelationInput!]
  ) {
    habits(orderBy: $orderBy, where: { dueDate: { lte: $dueDate } }) {
      name
      dueDate
      recurInterval
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

export type LastCalorieRecord = {
  calorieFirst: Pick<CalorieRecord, 'calories' | 'leftForToday'> & {
    Person: Pick<Person, 'weightLbs'>;
  };
};
export const LAST_CALORIE_RECORD = gql`
  query LastCalorieRecord {
    calorieFirst(orderBy: { createdAt: desc }) {
      calories
      leftForToday
      Person {
        weightLbs
      }
    }
  }
`;

export const VALIDATE_USER = gql`
  query ValidateUser(
    $email: String!
    $encryptedPassword: String!
    $role: String
  ) {
    validate(email: $email, encryptedPassword: $encryptedPassword, role: $role)
  }
`;
