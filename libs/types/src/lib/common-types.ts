export type FinanceGraphData = {
  financeData: Array<Record<string, string | number>>;
  uniqueAccountNames: string[];
};

export type JwtToken = {
  encrypted: string;
  iat: number;
  userEmail: string;
  userId: string;
};
