import { execSyncCommand } from '@ethang/util-cli';

import { Shell } from '../../constants';

export const windowsUpdate = (): void => {
  execSyncCommand(
    'Install-WindowsUpdate -WindowsUpdate -AcceptAll',
    Shell.pwsh
  );
  execSyncCommand(
    'Install-WindowsUpdate -MicrosoftUpdate -AcceptAll -AutoReboot',
    Shell.pwsh
  );
};