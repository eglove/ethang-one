import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PrismaService } from '../prisma/prisma.service';
import { ToReadLinkService } from './to-read-link.service';

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
    const string = faker.datatype.string();
    const today = new Date();
    const url = faker.internet.url();

    prismaMock.toReadLink.create.mockResolvedValue({
      createdAt: today,
      id: string,
      updatedAt: today,
      url,
      userId: string,
    });

    await expect(
      service.create({
        data: {
          createdAt: today,
          id: string,
          updatedAt: today,
          url,
          user: {
            create: {
              email: faker.internet.email(),
              id: string,
              password: faker.internet.password(),
              role: 'guest',
            },
          },
        },
      })
    ).resolves.toEqual({
      createdAt: today,
      id: string,
      updatedAt: today,
      url,
      userId: string,
    });
  });
});
