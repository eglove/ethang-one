/* eslint-disable new-cap */
import 'reflect-metadata';

import { resolvers } from '@generated/type-graphql';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { buildSchema } from 'type-graphql';

const isDevelopment = process.env.MODE === 'DEV';

const startServer = async (): Promise<void> => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.NX_DATABASE_URL,
      },
    },
  });

  const plugins = isDevelopment
    ? [
        ApolloServerPluginLandingPageLocalDefault(),
        ApolloServerPluginInlineTrace(),
      ]
    : [ApolloServerPluginLandingPageDisabled()];

  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    context: {
      prisma,
    },
    cors: {
      credentials: true,
      origin: '*',
    },
    introspection: isDevelopment,
    plugins: [...plugins],
    schema,
  });

  server
    .listen(isDevelopment ? '4000' : '80', async () => {
      console.info(
        `🚀 GraphQL server is running on http://localhost:${'4000'}/graphql`
      );
    })
    .catch((error: Error) => {
      console.error(error);
    });
};

startServer().catch((error: Error) => {
  console.error(error);
});
