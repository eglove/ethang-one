import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PrismaService } from '../prisma/prisma.service';
import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
