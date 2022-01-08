import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

import { chocolateyUpdate } from '../commands/morning-scripts/chocolatey-update';
import { clearDocker } from '../commands/morning-scripts/clear-docker';
import { openLinks } from '../commands/morning-scripts/open-links';
import { powershellModuleUpdate } from '../commands/morning-scripts/powershell-module-update';
import { repoUpdate } from '../commands/morning-scripts/repo-update';
import { ubuntuUpdate } from '../commands/morning-scripts/ubuntu-update';
import { windowsUpdate } from '../commands/morning-scripts/windows-update';

export const events = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap>
): void => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('morning', message => {
    socket.broadcast.emit(message);
    socket.broadcast.emit('morning');
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
  });
};
