import fs from 'node:fs';

export const prismaGenerate = (): void => {
  const test = fs.readFileSync(
    './packages/prisma-connection/src/lib/ethang-prisma-data/index.d.ts',
    'utf8'
  );

  const lines = test.split('\n');

  let isInType = false;
  let currentType = '';
  const types: string[] = [];
  for (const line of lines) {
    const trimmedLine = line.trim();

    // export type BlogAuthor = {
    if (trimmedLine.startsWith('export type') && !trimmedLine.endsWith('}')) {
      isInType = true;
    }

    // export type Role = (typeof Role)[keyof typeof Role]
    // export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
    if (
      (trimmedLine.startsWith('export type') && trimmedLine.endsWith('}')) ||
      (isInType && !trimmedLine.includes('}'))
    ) {
      isInType = false;
      types.push(`${trimmedLine}\n`);
      continue;
    }

    if (isInType) {
      currentType += `${trimmedLine}\n`;
    }

    if (isInType && trimmedLine.endsWith('}')) {
      isInType = false;
      types.push(currentType);
      currentType = '';
    }
  }

  for (const type of types) {
    fs.writeFile(
      '/Users/eglove/Projects/ethang-one/packages/ethang-one/src/app/prisma-generate/test-gen.ts',
      type,
      { flag: 'a+' },
      error => {
        console.error(error);
      }
    );
  }
};
