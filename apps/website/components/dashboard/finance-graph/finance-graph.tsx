import { useQuery } from '@apollo/client';
import {
  addDays,
  currencyFormat,
  eightBaseFormatTime,
} from '@ethang/util-typescript';
import { useState } from 'react';
import {
  CartesianGrid,
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

  useQuery<FinanceData>(financeData, {
    onCompleted(data) {
      // {date: [{accountName: currentValue}]}
      const restructuredData: Record<string, Record<string, number>> = {};
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
          if (typeof restructuredData[key][accountName] === 'number') {
            total += restructuredData[key][accountName];
          }
        }

        restructuredData[key].NetWorth = total;
      }

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

  return (
    <LineChart width={750} height={350} data={graphData}>
      {graphData?.map(item => {
        return Object.keys(item).map(itemKey => {
          if (itemKey !== 'date') {
            return <Line key={itemKey} dataKey={itemKey} />;
          }

          return null;
        });
      })}

      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis
        tickFormatter={(tickItem: string): string => {
          return currencyFormat(Number(tickItem));
        }}
        width={95}
      />
      <Tooltip />
    </LineChart>
  );
}
