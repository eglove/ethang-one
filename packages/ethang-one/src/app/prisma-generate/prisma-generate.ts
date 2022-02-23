import fs from 'node:fs';

export const prismaGenerate = (): void => {
  fs.readFileSync(
    './packages/prisma-connection/src/lib/ethang-prisma-data/index.d.ts'
  );
};
