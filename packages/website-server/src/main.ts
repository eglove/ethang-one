/* eslint-disable new-cap */
import 'reflect-metadata';

import {ENV_KEYS, getConst} from '@ethang-one/node-environment';
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
        url: getConst(ENV_KEYS.WEBSITE_DATABASE_URL),
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
    .listen(getConst(ENV_KEYS.PORT), async () => {
      console.log(
        `🚀 GraphQL server is running on http://localhost:${getConst(ENV_KEYS.PORT)}/graphql`,
      );
    })
    .catch((error: Error) => {
      console.log(error);
    });
};

startServer().catch((error: Error) => {
  console.log(error);
});

