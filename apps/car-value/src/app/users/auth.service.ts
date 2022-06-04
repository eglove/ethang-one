import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as scrypt_ } from 'node:crypto';
import { promisify } from 'node:util';

import { User } from './user.entity';
import { UsersService } from './users.service';

const scrypt = promisify(scrypt_);

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string): Promise<User> {
    const users = await this.usersService.find(email);

    if (users?.length > 0) {
      throw new BadRequestException('Email already in use.');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = `${salt}.${hash.toString('hex')}`;

    return this.usersService.create(email, result);
  }

  async signin(email: string, password: string): Promise<User> {
    const [user] = await this.usersService.find(email);

    if (typeof user === 'undefined') {
      throw new NotFoundException('User not found.');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Incorrect login details.');
    }

    return user;
  }
}
