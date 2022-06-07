import { PORT } from '@ethang/node-environment';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.NODE_ENV === 'development' ? PORT.graphql : 80;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(`🚀 GraphQL is running on: http://localhost:${port}/graphql`);
}

bootstrap().catch((error: Error) => {
  Logger.error('Failed to start server.', error);
});
