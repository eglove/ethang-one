import { ToReadLinkCreateManyInput } from '@ethang/prisma-nestjs-graphql';
import { faker } from '@faker-js/faker';

import { prismaMock } from '../../../../../prisma/singleton';

type ExampleReadLink = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string;
  user: { email: string; id: string; password: string; role: string };
  userId: string;
};

export const exampleToReadLink = (): ExampleReadLink => {
  return {
    createdAt: new Date(),
    id: faker.datatype.string(),
    updatedAt: new Date(),
    url: faker.internet.url(),
    user: {
      email: faker.internet.email(),
      id: faker.datatype.string(),
      password: faker.internet.password(),
      role: 'guest',
    },
    userId: faker.datatype.string(),
  };
};

export const createToReadLink = (): ExampleReadLink => {
  const readLink = exampleToReadLink();

  prismaMock.toReadLink.create.mockResolvedValue({
    createdAt: readLink.createdAt,
    id: readLink.id,
    updatedAt: readLink.updatedAt,
    url: readLink.url,
    userId: readLink.userId,
  });

  return readLink;
};

export const createToReadLinks = (
  amount: number
): ToReadLinkCreateManyInput[] => {
  if (amount < 2) {
    throw new Error('Use createToReadLink of amount is less than 2.');
  }

  const exampleReadLinks = [];
  for (let index = 0; index < amount; index++) {
    exampleReadLinks.push(exampleToReadLink());
  }

  const readLinks: ToReadLinkCreateManyInput[] = [];
  for (const readLink of exampleReadLinks) {
    readLinks.push({
      createdAt: readLink.createdAt,
      id: readLink.id,
      updatedAt: readLink.updatedAt,
      url: readLink.url,
      userId: readLink.userId,
    });
  }

  prismaMock.toReadLink.createMany.mockResolvedValue({
    count: amount,
  });

  return readLinks;
};
