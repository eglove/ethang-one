import { Habit } from '@ethang/ethang-db';
import { Habit as HabitObject } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<HabitObject | HabitObject[]> {
  const habit = new Habit();
  if (request.method === 'POST') {
    response.status(200);

    const { name, recurInterval, dueDate } = request.body as {
      name: string;
      recurInterval: string;
      dueDate: number;
    };

    if (
      typeof name === 'string' &&
      typeof recurInterval === 'string' &&
      typeof dueDate === 'number'
    ) {
      response.send(
        JSON.stringify(
          await habit.create({
            dueDate,
            name,
            recurInterval,
          })
        )
      );
    }

    response.end();
    return;
  }

  if (request.method === 'GET') {
    response.status(200).json(await habit.getDueHabits());
    response.end();
  }
}
