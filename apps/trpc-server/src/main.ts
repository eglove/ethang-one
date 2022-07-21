import { PORT } from '@ethang/node-environment';
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

import { userRouter } from './app/routers';

const appRouter = trpc.router().merge('user.', userRouter);
export type AppRouter = typeof appRouter;

const app = express();

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(PORT.trpc);
