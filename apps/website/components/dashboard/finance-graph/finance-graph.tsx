import { useQuery } from '@apollo/client';
import {
  addDays,
  currencyFormat,
  habitFormatTime,
  randomColor,
} from '@ethang/util-typescript';
import { useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { FinanceData, financeData } from '../graphql/queries';

export function FinanceGraph(): JSX.Element {
  const [graphData, setGraphData] = useState<
    Array<Record<string, string | number>>
  >([]);
  const [accountNames, setAccountNames] = useState<string[]>([]);

  useQuery<FinanceData>(financeData, {
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      const restructuredData: Record<string, Record<string, number>> = {};
      let uniqueAccountNames: string[] = [];

      // { recordedDate1: { account1: value1, account2, value2 }, recordedDate2: { ... } }
      for (const item of data.financeRecordsList.items) {
        if (restructuredData[item.recordedDate]) {
          restructuredData[item.recordedDate][item.accountName] =
            item.currentValue;
        } else {
          restructuredData[item.recordedDate] = {
            [item.accountName]: item.currentValue,
          };
        }
      }

      // Get list of unique account Names, and total for NetWorth
      for (const key of Object.keys(restructuredData)) {
        let total = 0;
        for (const accountName of Object.keys(restructuredData[key])) {
          if (!uniqueAccountNames.includes(accountName)) {
            uniqueAccountNames = [...uniqueAccountNames, accountName];
          }

          if (typeof restructuredData[key][accountName] === 'number') {
            total += restructuredData[key][accountName];
          }
        }

        restructuredData[key].NetWorth = total;
      }

      setAccountNames([...uniqueAccountNames, 'NetWorth']);
      // [ { date: recordedDate, { account1: value1, account2: value2 } }, { date2: recordedDate2, { ... } ]
      setGraphData(() => {
        return Object.keys(restructuredData).map(itemKey => {
          return {
            date: itemKey,
            ...restructuredData[itemKey],
          };
        });
      });
    },
    variables: {
      dateStart: habitFormatTime(addDays(new Date(), -365)),
      today: habitFormatTime(),
    },
  });

  const getStrokeColor = (itemKey: string): string => {
    if (itemKey === 'NetWorth') {
      return '#f00';
    }

    const color = randomColor();
    if (color === '#f00') {
      return getStrokeColor(itemKey);
    }

    return color;
  };

  return (
    <LineChart data={graphData} height={350} width={950}>
      {accountNames.map(name => {
        return <Line dataKey={name} key={name} stroke={getStrokeColor(name)} />;
      })}
      <Legend />
      <Tooltip
        formatter={(item: number): string => {
          return currencyFormat(item);
        }}
      />
      <CartesianGrid strokeDasharray="5.5" />
      <XAxis dataKey="date" />
      <YAxis
        width={120}
        tickFormatter={(tickItem: string): string => {
          return currencyFormat(Number(tickItem));
        }}
      />
    </LineChart>
  );
}
