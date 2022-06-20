import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PersonService } from '../person/person.service';
import { PrismaService } from '../prisma/prisma.service';
import { CalorieRecordService } from './calorie-record.service';

describe('CalorieRecordService', () => {
  let service: CalorieRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CalorieRecordService,
        PersonService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<CalorieRecordService>(CalorieRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
