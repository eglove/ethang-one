import { runCommand } from '@ethang/util-cli';

import { SAVED_FILES_ROOT, Shell } from '../../constants';

export const powershellModuleUpdate = async (): Promise<void> => {
  runCommand(
    [
      'Update-Module -AcceptLicense -Confirm',
      `Get-InstalledModule | Format-Table Name -HideTableHeaders | Out-File ${SAVED_FILES_ROOT}/installed-ps-modules.txt`,
      `(Get-Content ${SAVED_FILES_ROOT}/installed-ps-modules.txt) | Where-Object { $_.trim() -ne "" } | Set-Content ${SAVED_FILES_ROOT}/installed-ps-modules.txt`,
    ],
    Shell.pwsh
  );
};
