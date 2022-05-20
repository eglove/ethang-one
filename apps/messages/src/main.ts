import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { PORT } from '../../../ports';
import { MessagesModule } from './messages/messages.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(new ValidationPipe());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = PORT.messages;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap().catch((error: Error) => {
  Logger.error('Failed to start application.', error);
});
