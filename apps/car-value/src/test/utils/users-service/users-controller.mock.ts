import { faker } from '@faker-js/faker';

import { CreateUserDto } from '../../../app/users/dto/create-user.dto';
import { User } from '../../../app/users/user.entity';

export const usersControllerMock = (): unknown => {
  return {
    async signin(body: CreateUserDto): Promise<User> {
      const user = new User();
      user.email = body.email;
      user.id = faker.datatype.number();
      user.password = body.password;

      return user;
    },
  };
};
