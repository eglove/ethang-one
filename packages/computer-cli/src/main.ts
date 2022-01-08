import { chocolateyUpdate } from './app/commands/morning-scripts/chocolatey-update';
import { clearDocker } from './app/commands/morning-scripts/clear-docker';
import { openLinks } from './app/commands/morning-scripts/open-links';
import { powershellModuleUpdate } from './app/commands/morning-scripts/powershell-module-update';
import { repoUpdate } from './app/commands/morning-scripts/repo-update';
import { ubuntuUpdate } from './app/commands/morning-scripts/ubuntu-update';
import { windowsUpdate } from './app/commands/morning-scripts/windows-update';

async function start(): Promise<void> {
  // Sync
  windowsUpdate();

  // Async
  Promise.all([
    chocolateyUpdate(),
    powershellModuleUpdate(),
    ubuntuUpdate(),
    clearDocker(),
  ]).catch((error: Error) => {
    console.error(error);
  });

  // Sync
  repoUpdate();
  openLinks();
}

start().catch((error: Error) => {
  console.error(`Your server did an oopsie. ${error.message}`);
});
