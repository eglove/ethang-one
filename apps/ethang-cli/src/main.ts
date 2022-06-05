import { startCli } from './app/start-cli';

startCli().catch((error: Error) => {
  console.error('Failed to start CLI.', error);
});
