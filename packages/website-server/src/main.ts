/* eslint-disable new-cap */
import 'reflect-metadata';

import {resolvers} from '@generated/type-graphql';
import {PrismaClient} from '@prisma/client';
import {ApolloServer} from 'apollo-server';
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import {buildSchema} from 'type-graphql';

const startServer = async (): Promise<void> => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.NX_DATABASE_URL,
      },
    },
  });

  const plugins = process.env.NODE_ENV === 'development'
    ? [ApolloServerPluginLandingPageLocalDefault(), ApolloServerPluginInlineTrace()]
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
    introspection: process.env.NODE_ENV === 'development',
    plugins: [...plugins],
    schema,
  });

  server
    .listen('4000', async () => {
      console.log(
        `🚀 GraphQL server is running on http://localhost:${'4000'}/graphql`,
      );
    })
    .catch((error: Error) => {
      console.log(error);
    });
};

startServer().catch((error: Error) => {
  console.log(error);
});

