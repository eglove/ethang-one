import { chocolateyUpdate } from './app/commands/morning-scripts/chocolatey-update';
import { openLinks } from './app/commands/morning-scripts/open-links';
import { repoUpdate } from './app/commands/morning-scripts/repo-update';
import { ubuntuUpdate } from './app/commands/morning-scripts/ubuntu-update';

async function start(): Promise<void> {
  chocolateyUpdate();
  ubuntuUpdate();
  repoUpdate();
  openLinks();
}

start().catch((error: Error) => {
  console.error(`Your server did an oopsie. ${error.message}`);
});
