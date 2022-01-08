import { runCommand } from '@ethang-one/util-typescript';

export const ubuntuUpdate = async (): Promise<void> => {
  const password = process.env.WSL_PASSWORD;

  if (typeof password === 'string') {
    runCommand(
      `ubuntu run 'echo ${password} | sudo -S apt update && sudo apt upgrade -y && sudo apt autoremove -y'`,
      'pwsh'
    );
  }
};
