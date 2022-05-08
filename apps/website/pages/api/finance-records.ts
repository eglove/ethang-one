import { FinanceRecord } from '@ethang/ethang-db';
import { FinanceRecord as FinanceRecordObject } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<FinanceRecordObject[]> {
  const financeRecord = new FinanceRecord();

  if (request.method === 'POST' && Array.isArray(request.body)) {
    response
      .status(200)
      .json(financeRecord.createMany(request.body as FinanceRecordObject[]));
    response.end();
    return;
  }

  if (request.method === 'GET') {
    response
      .status(200)
      .json(await financeRecord.getFinanceRecordsInLastYear());
    response.end();
  }
}
