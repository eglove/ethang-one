import { faker } from '@faker-js/faker';

import { User } from '../../../users/user.entity';

export const createUser = (data?: Partial<User>): User => {
  const user = new User();
  user.email = data?.email ?? faker.internet.email();
  user.id = data?.id ?? faker.datatype.number();
  user.password = data?.password ?? faker.internet.password();

  return user;
};
