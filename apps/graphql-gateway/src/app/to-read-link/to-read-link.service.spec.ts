import { ToReadLinkCreateManyInput } from '@ethang/prisma-nestjs-graphql';
import { faker } from '@faker-js/faker';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PrismaService } from '../prisma/prisma.service';
import { ToReadLinkService } from './to-read-link.service';

const exampleToReadLink: () => {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string;
  user: { email: string; id: string; password: string; role: string };
  userId: string;
} = () => {
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

describe('ToReadLinkService', () => {
  let service: ToReadLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ToReadLinkService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<ToReadLinkService>(ToReadLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a ToReadLink', async () => {
    const { createdAt, updatedAt, id, url, userId, user } = exampleToReadLink();

    prismaMock.toReadLink.create.mockResolvedValue({
      createdAt,
      id,
      updatedAt,
      url,
      userId,
    });

    await expect(
      service.create({
        data: {
          createdAt,
          id,
          updatedAt,
          url,
          user: {
            create: {
              email: user.email,
              id: user.id,
              password: user.password,
              role: user.role,
            },
          },
        },
      })
    ).resolves.toEqual({
      createdAt,
      id,
      updatedAt,
      url,
      userId,
    });
  });

  it('should fail to create if the url is invalid', async () => {
    let { createdAt, updatedAt, id, url, userId, user } = exampleToReadLink();
    url = faker.datatype.string();

    prismaMock.toReadLink.create.mockResolvedValue({
      createdAt,
      id,
      updatedAt,
      url,
      userId,
    });

    await expect(
      service.create({
        data: {
          createdAt,
          id,
          updatedAt,
          url,
          user: {
            create: {
              email: user.email,
              id: user.id,
              password: user.password,
              role: user.role,
            },
          },
        },
      })
    ).rejects.toEqual(new BadRequestException('Invalid URL'));
  });

  it('should create many ToReadLinks', async () => {
    const examples = [
      exampleToReadLink(),
      exampleToReadLink(),
      exampleToReadLink(),
    ];

    const createManys: ToReadLinkCreateManyInput[] = [];
    for (const example of examples) {
      createManys.push({
        createdAt: example.createdAt,
        id: example.id,
        updatedAt: example.updatedAt,
        url: example.url,
        userId: example.userId,
      });
    }

    prismaMock.toReadLink.createMany.mockResolvedValue({
      count: 3,
    });

    await expect(
      service.createMany({
        data: createManys,
      })
    ).resolves.toEqual({
      count: 3,
    });
  });

  it('should delete a ToReadLink', () => {
    const { createdAt, id, url, updatedAt, userId } = exampleToReadLink();

    prismaMock.toReadLink.delete.mockResolvedValue({
      createdAt,
      id,
      updatedAt,
      url,
      userId,
    });
  });
});
