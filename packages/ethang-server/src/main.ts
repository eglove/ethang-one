/* eslint-disable new-cap */
import { PrismaClient } from '@ethang-one/prisma-connection';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server';
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import chalk from 'chalk';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

import { resolvers } from './app/schema/root-resolver';
import { typeDefs } from './app/schema/type-defs/type-defs';
import { userTypeDefs } from './app/schema/type-defs/user-type-defs';

export interface Context {
  ethangDb: PrismaClient;
}

async function startApolloServer(): Promise<void> {
  const plugins =
    process.env.NODE_ENV === 'development'
      ? [
          ApolloServerPluginLandingPageLocalDefault(),
          ApolloServerPluginInlineTrace(),
        ]
      : [ApolloServerPluginLandingPageDisabled()];

  const ethangDatabase = new PrismaClient();

  const schema = makeExecutableSchema({
    resolvers,
    typeDefs: [...scalarTypeDefs, typeDefs, userTypeDefs],
  });

  const server = new ApolloServer({
    context(): Context {
      return { ethangDb: ethangDatabase };
    },
    introspection: process.env.NODE_ENV === 'development',
    plugins: [...plugins],
    schema,
  });

  await server.listen().then(({ url }: { url: string }) => {
    const message = `🚀 Server is now running in ${process.env.NODE_ENV} mode on ${url}`;

    console.info(
      process.env.NODE_ENV === 'development'
        ? chalk.bgGreen(chalk.white(message))
        : chalk.bgRed(chalk.white(message))
    );
  });
}

startApolloServer().catch((error: Error) => {
  console.error(`Your server did an oopsie. ${error.message}`);
});
