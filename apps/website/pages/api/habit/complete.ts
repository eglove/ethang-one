import { Habit } from '@ethang/ethang-db';
import { Habit as HabitObject } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<HabitObject> {
  if (request.method !== 'POST') {
    response.status(500);
    response.send({ error: 'Failed to login.' });
    response.end();
    return;
  }

  const habit = new Habit();
  const { id, recurInterval } = request.body as {
    id: string;
    recurInterval: string;
  };
  await habit.completeHabit(id, recurInterval);
  response.status(200);
  response.end();
}
