import { PORT } from '@ethang/node-environment';
import { PrismaClient } from '@prisma/client';
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import * as http from 'node:http';

export type Context = {
  prisma: PrismaClient;
};

async function startServer(): Promise<void> {
  const plugins =
    process.env.NODE_ENV === 'development'
      ? [
          ApolloServerPluginLandingPageLocalDefault(),
          ApolloServerPluginInlineTrace(),
        ]
      : [ApolloServerPluginLandingPageDisabled()];

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    context() {
      const prisma = new PrismaClient();
      return { prisma };
    },
    introspection: process.env.NODE_ENV === 'development',
    plugins: [...plugins, responseCachePlugin()],
    validationRules: [depthLimit(10)],
  });

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(PORT.graphql, () => {
    const message = `🚀 Server is now running in ${process.env.NODE_ENV} mode on http://localhost:${PORT.graphql}/graphql`;

    console.info(message);
  });
}

// eslint-disable-next-line unicorn/prefer-top-level-await
startServer().catch((error: Error) => {
  console.error(`Your server did an oopsie. ${error.message}`);
});
