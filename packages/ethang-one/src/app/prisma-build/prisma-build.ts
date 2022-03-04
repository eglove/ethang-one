import { printText } from '@ethang-one/react-components';
import { execSyncCommand } from '@ethang-one/util-cli';
import fs from 'node:fs';

import { packageManagerInstallAll } from '../../main';

const GENERATED_DIRECTORY = './node_modules/@generated';
const PRISMA_CONNECTION_DIRECTORY = 'packages/prisma-connection/src/lib';

export const prismaBuild = (): void => {
  execSyncCommand(packageManagerInstallAll);
  execSyncCommand(
    `npx prisma db pull --schema ${PRISMA_CONNECTION_DIRECTORY}/ethang.prisma`
  );
  execSyncCommand(
    `npx prisma generate --schema ${PRISMA_CONNECTION_DIRECTORY}/ethang.prisma`
  );
  execSyncCommand(
    `npx @paljs/cli schema typescript --schema ${PRISMA_CONNECTION_DIRECTORY}/ethang.prisma`
  );

  fs.renameSync(
    './src/schema.ts',
    `./${PRISMA_CONNECTION_DIRECTORY}/schema.ts`
  );

  fs.rmSync('./src', { recursive: true });

  printText('Removing old @generated.');
  const oldGenExists = fs.existsSync(GENERATED_DIRECTORY);
  if (oldGenExists) {
    fs.rmSync(GENERATED_DIRECTORY, { recursive: true });
  }

  printText('Adding new @generated.');
  fs.renameSync(
    `./${PRISMA_CONNECTION_DIRECTORY}/node_modules/@generated`,
    GENERATED_DIRECTORY
  );
  printText('Cleaning up.');
  fs.rmSync(`./${PRISMA_CONNECTION_DIRECTORY}/node_modules`, {
    recursive: true,
  });
};
