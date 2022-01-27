import { runCommand } from '@ethang-one/util-cli';

import { Shell } from '../../constants';
import { ubuntuPassword } from '../../constants-ignored';

export const ubuntuUpdate = (): void => {
  runCommand(
    `ubuntu run 'echo ${ubuntuPassword} | sudo -S apt update && sudo apt upgrade -y && sudo apt autoremove -y'`,
    Shell.pwsh
  );
};
