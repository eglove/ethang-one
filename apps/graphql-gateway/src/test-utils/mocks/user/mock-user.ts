import { User, UserCreateInput } from '@ethang/prisma-nestjs-graphql';
import { faker } from '@faker-js/faker';

import { prismaMock } from '../../../../../../prisma/singleton';

export const MockUser = {
  create(role = 'guest'): { input: UserCreateInput; output: User } {
    const input = {
      createdAt: new Date(),
      email: faker.internet.email(),
      id: faker.datatype.string(),
      password: faker.internet.password(),
      role,
      updatedAt: new Date(),
    };

    const output = {
      createdAt: input.createdAt,
      email: input.email,
      id: input.id,
      password: input.password,
      role: input.role,
      updatedAt: input.updatedAt,
    };

    prismaMock.user.create.mockResolvedValue(input);

    return { input, output };
  },
};
