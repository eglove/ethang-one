import { PORT } from '@ethang/node-environment';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires,unicorn/prefer-module,@typescript-eslint/no-unsafe-assignment
const cookieSession = require('cookie-session');

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.use(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    cookieSession({
      keys: ['EthanG-Cookie'],
    })
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  const port = PORT.carValue;
  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap().catch((error: Error) => {
  Logger.log('Failed to start application.', error);
});
