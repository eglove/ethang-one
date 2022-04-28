import type { RequestHandler } from 'express';
import express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import * as path from 'node:path';
import * as url from 'node:url';

// @ts-expect-error Added by Qwik automatically
import symbols from '../server/q-symbols.json';
import { render } from './entry.server';

const PORT = process.env.PORT ?? 8080;

export const qwikMiddleware: RequestHandler = async (request, response) => {
  const result = await render({
    debug: true,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    symbols,
    url: new URL(`${request.protocol}://${request.hostname}${request.url}`),
  });
  response.send(result.html);
};

async function startServer(): Promise<void> {
  const app = express();
  const publicDirectory = join(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '..',
    'public'
  );
  app.use(
    express.static(publicDirectory, {
      index: false,
    })
  );

  // Optionally server Partytown if found.
  const partytownDirectory = join(
    path.dirname(url.fileURLToPath(import.meta.url)),
    '..',
    '..',
    'node_modules',
    '@builder.io',
    'partytown',
    'lib'
  );
  if (existsSync(partytownDirectory)) {
    app.use('/~partytown', express.static(partytownDirectory));
  }

  app.get('/*', qwikMiddleware);

  app.listen(PORT, () => {
    console.info(`http://localhost:${PORT}/`);
  });
}

startServer().catch(() => {
  console.error('Failed to start server.');
});
