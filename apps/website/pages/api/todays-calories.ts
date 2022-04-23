import { TodaysCalories } from '@ethang/ethang-db';
import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  const todaysCalories = new TodaysCalories();

  if (request.method === 'GET') {
    response.status(200).json(await todaysCalories.getFirst());
    response.end();
    return;
  }

  if (request.method === 'POST') {
    const parameters = request.body as Prisma.TodaysCaloriesUpdateInput;
    response.status(200);
    await todaysCalories.update(parameters);
    response.end();
  }
}
