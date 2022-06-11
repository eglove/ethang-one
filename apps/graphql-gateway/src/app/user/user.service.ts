import { ENV_KEYS, getConst } from '@ethang/node-environment';
import {
  CreateOneUserArgs,
  FindUniqueUserArgs,
  User,
} from '@ethang/prisma-nestjs-graphql';
import { JwtToken } from '@ethang/types';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import jwt from 'jsonwebtoken';
import {
  decryptWithSecret,
  encryptWithSecret,
} from 'next/dist/server/crypto-utils';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(properties: CreateOneUserArgs): Promise<User> {
    return this.prisma.user.create(properties);
  }

  async findUnique(properties: FindUniqueUserArgs): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique(properties);

    if (user === null) {
      return;
    }

    return user;
  }

  async signin(email: string, password: string): Promise<string> {
    const user = await this.findUnique({
      where: {
        email,
      },
    });

    if (typeof user === 'undefined') {
      throw new NotFoundException('User not found.');
    }

    const storedPassword = decryptWithSecret(
      Buffer.from(getConst(ENV_KEYS.CRYPTO_TOKEN)),
      user.password
    );

    if (storedPassword !== password) {
      throw new BadRequestException('Incorrect login details.');
    }

    const payload: Pick<JwtToken, 'encrypted' & 'userEmail' & 'userId'> = {
      encrypted: user.password,
      userEmail: user.email,
      userId: user.id,
    };

    return jwt.sign(payload, getConst(ENV_KEYS.CRYPTO_TOKEN));
  }

  async signup(email: string, password: string): Promise<User> {
    const users = await this.prisma.user.findMany({
      where: {
        email,
      },
    });

    if (users.length > 0) {
      throw new BadRequestException('Email already in use.');
    }

    const encrypted = encryptWithSecret(
      Buffer.from(getConst(ENV_KEYS.CRYPTO_TOKEN)),
      password
    );

    return this.create({
      data: {
        email,
        password: encrypted,
        role: 'guest',
      },
    });
  }

  async validate(
    email: string,
    encryptedPassword: string,
    role?: string
  ): Promise<boolean> {
    const user = await this.findUnique({
      where: {
        email,
      },
    });

    if (typeof user === 'undefined') {
      throw new NotFoundException('User not found.');
    }

    if (typeof role === 'string' && role !== user.role) {
      throw new BadRequestException('Access denied.');
    }

    const cryptoBuffer = Buffer.from(getConst(ENV_KEYS.CRYPTO_TOKEN));
    const requestPassword = decryptWithSecret(cryptoBuffer, encryptedPassword);
    const storedPassword = decryptWithSecret(cryptoBuffer, user.password);

    if (requestPassword !== storedPassword) {
      throw new BadRequestException('Access denied.');
    }

    return true;
  }
}
