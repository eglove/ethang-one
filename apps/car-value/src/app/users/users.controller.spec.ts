import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { createUser } from '../../test/utils/users-service/create-user';
import { usersControllerMock } from '../../test/utils/users-service/users-controller.mock';
import { usersServiceMock } from '../../test/utils/users-service/users-service.mock';
import { AuthService } from './auth.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  const defaultUser = createUser({ id: 1 });
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: AuthService, useValue: usersControllerMock() },
        { provide: UsersService, useValue: usersServiceMock([defaultUser]) },
      ],
    }).compile();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a list of users with the given email', async () => {
    const users = await controller.findAllUsers(defaultUser.email);

    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual(defaultUser.email);
    expect(users[0].password).toEqual(defaultUser.password);
  });

  it('should return a single user with the given id', async () => {
    const user = await controller.findUser(String(defaultUser.id));

    expect(user).toBeDefined();
  });

  it('should throw an error if user with given id is not found', async () => {
    await expect(
      controller.findUser(String(defaultUser.id + 1))
    ).rejects.toThrow(NotFoundException);
  });

  it('should update session object and return user on sign in', async () => {
    const session = { userId: undefined };
    const user = await controller.signin(
      {
        email: defaultUser.email,
        password: defaultUser.password,
      },
      session
    );

    expect(user).toBeDefined();
  });
});
