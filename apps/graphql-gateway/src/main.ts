import { PrismaClient } from '@prisma/client';
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import * as http from 'node:http';

import { PORT } from '../../../ports';

async function startApolloServer(): Promise<void> {
  const isProduction = process.env.NODE_ENV === 'production';
  // const dirname = path.dirname(fileURLToPath(import.meta.url));
  const database = new PrismaClient();
  const app = express();
  const httpServer = http.createServer(app);

  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `;

  const books = [
    {
      author: 'Kate Chopin',
      title: 'The Awakening',
    },
    {
      author: 'Paul Auster',
      title: 'City of Glass',
    },
  ];

  const resolvers = {
    Query: {
      books(): Array<Record<string, string>> {
        return books;
      },
    },
  };

  const server = new ApolloServer({
    context: {
      database,
    },
    csrfPrevention: true,
    introspection: !isProduction,
    resolvers,
    typeDefs,
    validationRules: [depthLimit(10)],
  });

  await server.start();
  server.applyMiddleware({ app, cors: { credentials: true, origin: true } });

  httpServer.listen(isProduction ? 80 : PORT.graphql, () => {
    console.info(
      `🚀 Server is now running in ${process.env.NODE_ENV} mode on http://localhost:${PORT.graphql}/graphql`
    );
  });
}

startApolloServer().catch((error: Error) => {
  console.error('Server failed to start.', error);
});
