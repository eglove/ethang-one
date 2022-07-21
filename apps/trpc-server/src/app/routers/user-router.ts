import * as trpc from '@trpc/server';
import { z } from 'zod';

export const userRouter = trpc
  .router()
  .query('getUser', {
    input(value: unknown) {
      if (typeof value === 'string') return value;
      throw new Error(`Invalid input: ${typeof value}`);
    },
    async resolve(request) {
      return { id: request.input, name: 'Bilbo' };
    },
  })
  .mutation('createUser', {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    async resolve(request) {
      // use your ORM of choice
      return request.input;
    },
  });
