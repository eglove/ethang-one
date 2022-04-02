import { gql } from '@apollo/client';

export const calorieData = gql`
  query MyData($id: ID!) {
    person(id: $id) {
      firstName
      lastName
      birthday
      weightLbs
      heightIn
    }
  }
`;

export type DueHabits = {
  habitsList: {
    items: Array<{
      dueDate: string;
      name: string;
      recurInterval: string;
    }>;
  };
};

export const dueHabits = gql`
  query DueHabits($dueDate: Date!) {
    habitsList(filter: { dueDate: { equals: $dueDate } }) {
      items {
        dueDate
        name
        recurInterval
      }
    }
  }
`;

export type FinanceData = {
  financeRecordsList: {
    items: Array<{
      accountName: string;
      currentValue: number;
      recordedDate: string;
    }>;
  };
};

export const financeData = gql`
  query FinanceData($today: Date!, $oneMonthAgo: Date!) {
    financeRecordsList(
      filter: { recordedDate: { gte: $oneMonthAgo, lte: $today } }
    ) {
      items {
        accountName
        currentValue
        recordedDate
      }
    }
  }
`;

export type FinanceStatuses = {
  UsaaChecking: {
    items: [{ currentValue?: number }];
  };
  UsaaSavings: {
    items: [{ currentValue?: number }];
  };
  ChaseCreditCard: {
    items: [{ currentValue?: number }];
  };
  LightStream: {
    items: [{ currentValue?: number }];
  };
  eToro: {
    items: [{ currentValue?: number }];
  };
  LendingClub: {
    items: [{ currentValue?: number }];
  };
};

export const financeStatuses = gql`
  query FinanceStatuses {
    UsaaChecking: financeRecordsList(
      first: 1
      sort: { recordedDate: DESC }
      filter: { accountName: { equals: "UsaaChecking" } }
    ) {
      items {
        currentValue
      }
    }
    UsaaSavings: financeRecordsList(
      first: 1
      sort: { recordedDate: DESC }
      filter: { accountName: { equals: "UsaaSavings" } }
    ) {
      items {
        currentValue
      }
    }
    ChaseCreditCard: financeRecordsList(
      first: 1
      sort: { recordedDate: DESC }
      filter: { accountName: { equals: "ChaseCreditCard" } }
    ) {
      items {
        currentValue
      }
    }
    LightStream: financeRecordsList(
      first: 1
      sort: { recordedDate: DESC }
      filter: { accountName: { equals: "LightStream" } }
    ) {
      items {
        currentValue
      }
    }
    eToro: financeRecordsList(
      first: 1
      sort: { recordedDate: DESC }
      filter: { accountName: { equals: "eToro" } }
    ) {
      items {
        currentValue
      }
    }
    LendingClub: financeRecordsList(
      first: 1
      sort: { recordedDate: DESC }
      filter: { accountName: { equals: "LendingClub" } }
    ) {
      items {
        currentValue
      }
    }
  }
`;
