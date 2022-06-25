import { faker } from '@faker-js/faker';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { MockToReadLink } from '../../test-utils/mocks/to-read-link/mock-to-read-link';
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
    const { input, output } = MockToReadLink.create();

    await expect(
      service.create({
        data: input,
      })
    ).resolves.toEqual(output);
  });

  it('should fail to create if the url is invalid', async () => {
    const { input } = MockToReadLink.create();
    input.url = faker.datatype.string();

    await expect(
      service.create({
        data: input,
      })
    ).rejects.toEqual(new BadRequestException('Invalid URL'));
  });

  it('should create many ToReadLinks', async () => {
    const { input, output } = MockToReadLink.createMany(3);

    await expect(
      service.createMany({
        data: input,
      })
    ).resolves.toEqual(output);
  });

  it('should delete a ToReadLink', async () => {
    const { input, output } = MockToReadLink.delete();

    await expect(service.delete(input)).resolves.toEqual(output);
  });

  it('should delete many ToReadLinks', async () => {
    const { input, output } = MockToReadLink.deleteMany(3);

    await expect(service.deleteMany(input)).resolves.toEqual(output);
  });

  it('should find first ToReadLink', async () => {
    const { input, output } = MockToReadLink.findFirst();

    await expect(service.findFirst(input)).resolves.toEqual(output);
  });

  it('should find many ToReadLink', async () => {
    const { input, output } = MockToReadLink.findMany();

    await expect(service.findMany(input)).resolves.toEqual(output);
  });

  it('should find unique ToReadLink', async () => {
    const { input, output } = MockToReadLink.findUnique();

    await expect(service.findUnique(input)).resolves.toEqual(output);
  });

  it('should update ToReadLink', async () => {
    const { input, output } = MockToReadLink.update();

    await expect(service.update(input)).resolves.toEqual(output);
  });

  it('should update many ToReadLink', async () => {
    const { input, output } = MockToReadLink.updateMany(3);

    await expect(service.updateMany(input)).resolves.toEqual(output);
  });

  it('should upsert ToReadLink', async () => {
    const { input, output } = MockToReadLink.upsert();

    await expect(service.upsert(input)).resolves.toEqual(output);
  });
});
