import { runCommand } from '@ethang/util-cli';

import { Shell } from '../../constants';

export const clearDocker = async (): Promise<void> => {
  runCommand(
    [
      'docker stop $(docker ps -a -q)',
      'docker rm $(docker ps -a -q) -f',
      'docker volume rm $(docker volume ls -q)',
      'docker rmi $(docker images -a -q) -f',
      'docker system prune -a -f',
    ],
    Shell.pwsh
  );
};
