import { FinanceGraphData } from '@ethang/ethang-db';
import { currencyFormat, fetcher, randomColor } from '@ethang/util-typescript';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useSWR from 'swr';

export function FinanceGraph(): JSX.Element {
  const { data } = useSWR<FinanceGraphData>('/api/finance-records', fetcher);

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

  if (typeof data === 'undefined') {
    return null;
  }

  return (
    <LineChart data={data.financeData} height={350} width={950}>
      {data.uniqueAccountNames.map(name => {
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
