import { runCommand } from '@ethang-one/util-typescript';

import { SAVED_FILES_ROOT } from '../../constants';

export const chocolateyUpdate = async (): Promise<void> => {
  runCommand(
    [
      'choco upgrade all -y --skip-virus-check',
      `choco list -l -r --id-only | Out-File ${SAVED_FILES_ROOT}/installed-choco-packages.txt`,
    ],
    'pwsh'
  );
};
