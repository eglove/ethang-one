import { useQuery } from '@apollo/client';
import {
  addDays,
  currencyFormat,
  eightBaseFormatTime,
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
    nextFetchPolicy: 'cache-and-network',
    onCompleted(data) {
      const restructuredData: Record<string, Record<string, number>> = {};
      let uniqueAccountNames: string[] = [];

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
      oneMonthAgo: eightBaseFormatTime(addDays(new Date(), -30)),
      today: eightBaseFormatTime(),
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
    <LineChart width={950} height={350} data={graphData}>
      {accountNames.map(name => {
        return <Line key={name} stroke={getStrokeColor(name)} dataKey={name} />;
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
        tickFormatter={(tickItem: string): string => {
          return currencyFormat(Number(tickItem));
        }}
        width={120}
      />
    </LineChart>
  );
}
