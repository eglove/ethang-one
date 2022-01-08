import { execSyncCommand } from '@ethang-one/util-typescript';

export const windowsUpdate = (): void => {
  execSyncCommand('Install-WindowsUpdate -WindowsUpdate -AcceptAll', 'pwsh');
  execSyncCommand(
    'Install-WindowsUpdate -MicrosoftUpdate -AcceptAll -AutoReboot',
    'pwsh'
  );
};
