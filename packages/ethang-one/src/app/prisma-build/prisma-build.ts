import { execSyncCommand } from '@ethang-one/util-cli';
import colors from 'colors';
import fs from 'node:fs';

import { packageManagerInstallAll } from '../../main';

const GENERATED_DIRECTORY = './node_modules/@generated';

export const prismaBuild = (): void => {
  execSyncCommand(packageManagerInstallAll);
  execSyncCommand(
    'npx prisma db pull --schema packages/website-server/src/prisma/schema.prisma'
  );
  execSyncCommand(
    'npx prisma generate --schema packages/website-server/src/prisma/schema.prisma'
  );
  execSyncCommand(
    'npx @paljs/cli schema typescript --schema packages/website-server/src/prisma/schema.prisma'
  );

  console.info(colors.bgBlue(colors.white('Removing old @generated.')));
  const oldGenExists = fs.existsSync(GENERATED_DIRECTORY);
  if (oldGenExists) {
    fs.rmSync(GENERATED_DIRECTORY, { recursive: true });
  }

  console.info(colors.bgBlue(colors.white('Adding new @generated.')));
  fs.renameSync(
    './packages/website-server/src/prisma/node_modules/@generated',
    GENERATED_DIRECTORY
  );
  console.info(colors.bgBlue(colors.white('Cleaning up.')));
  fs.rmSync('./packages/website-server/src/prisma/node_modules', {
    recursive: true,
  });

  execSyncCommand('npx nx run website-server:build');
};
