import { Test, TestingModule } from '@nestjs/testing';

import { prismaMock } from '../../../../../prisma/singleton';
import { PrismaService } from '../prisma/prisma.service';
import { CalorieService } from './calorie.service';

describe('CalorieService', () => {
  let service: CalorieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CalorieService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<CalorieService>(CalorieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
