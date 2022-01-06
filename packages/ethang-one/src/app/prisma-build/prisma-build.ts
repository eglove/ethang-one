import colors from 'colors';
import fs from 'node:fs';

import {packageManagerInstallAll} from '../../main';
import {execSyncCommand} from '../run-command';

export const prismaBuild = (): void => {
  execSyncCommand(packageManagerInstallAll);
  execSyncCommand('npx prisma db pull --schema packages/website-server/src/prisma/schema.prisma');
  execSyncCommand('npx prisma generate --schema packages/website-server/src/prisma/schema.prisma');
  execSyncCommand('npx @paljs/cli schema typescript --schema packages/website-server/src/prisma/schema.prisma');

  console.info(colors.bgBlue(colors.white('Removing old @generated.')));
  fs.rmSync('./node_modules/@generated', {recursive: true});
  console.info(colors.bgBlue(colors.white('Adding new @generated.')));
  fs.renameSync('./packages/website-server/src/prisma/node_modules/@generated', './node_modules/@generated');
  console.info(colors.bgBlue(colors.white('Cleaning up.')));
  fs.rmSync('./packages/website-server/src/prisma/node_modules', {recursive: true});

  execSyncCommand('npx nx run website-server:build');
};
