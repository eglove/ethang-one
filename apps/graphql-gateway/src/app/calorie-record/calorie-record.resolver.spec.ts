import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PersonService } from '../person/person.service';
import { PrismaService } from '../prisma/prisma.service';
import { CalorieRecordResolver } from './calorie-record.resolver';
import { CalorieRecordService } from './calorie-record.service';

describe('CalorieRecordResolver', () => {
  let resolver: CalorieRecordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CalorieRecordResolver,
        CalorieRecordService,
        PersonService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    resolver = module.get<CalorieRecordResolver>(CalorieRecordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
