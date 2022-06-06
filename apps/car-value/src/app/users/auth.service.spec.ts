import { faker } from '@faker-js/faker';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { usersServiceMock } from '../../test/utils/users-service/users-service.mock';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

type User = {
  email: string;
  id: number;
  password: string;
};

describe('AuthService', () => {
  let service: AuthService;
  const defaultUser: User = {
    email: faker.internet.email(),
    id: faker.datatype.number(),
    password: `${faker.internet.password()}.hash`,
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersServiceMock() },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('should create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('should create a new user with a salted ans hashed password', async () => {
    const user = await service.signup(defaultUser.email, defaultUser.password);

    expect(user.password).not.toEqual(defaultUser.password);
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('should throw an error if user signs up with an email that is in use', async () => {
    await service.signup(defaultUser.email, defaultUser.password);

    await expect(
      service.signup(defaultUser.email, defaultUser.password)
    ).rejects.toThrow(BadRequestException);
  });

  it('should throw an error if sign in is called with an unused email', async () => {
    await expect(
      service.signin(defaultUser.email, defaultUser.password)
    ).rejects.toThrow(NotFoundException);
  });

  it('should throw in error if an invalid password is provided', async () => {
    await service.signup(defaultUser.email, defaultUser.password);

    await expect(
      service.signin(defaultUser.email, 'incorrectpassword')
    ).rejects.toThrow(BadRequestException);
  });

  it('should return a user if correct password is provided', async () => {
    await service.signup(defaultUser.email, defaultUser.password);

    const user = await service.signin(defaultUser.email, defaultUser.password);
    expect(user).toBeDefined();
  });
});
