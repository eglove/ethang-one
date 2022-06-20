import {
  CalorieRecord,
  CreateManyCalorieRecordArgs,
  CreateOneCalorieRecordArgs,
  DeleteManyCalorieRecordArgs,
  DeleteOneCalorieRecordArgs,
  FindFirstCalorieRecordArgs,
  FindManyCalorieRecordArgs,
  FindUniqueCalorieRecordArgs,
  Person,
  UpdateManyHabitArgs,
  UpdateOneCalorieRecordArgs,
  UpsertOneCalorieRecordArgs,
} from '@ethang/prisma-nestjs-graphql';
import { ageFromBirthday, isNullOrUndefined } from '@ethang/util-typescript';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import ms from 'ms';

import { PersonService } from '../person/person.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaCrud } from '../util/interfaces';

const DATA_NOT_FOUND = 'Data not found.';

const recordDateFormat = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = Number(
    date.toLocaleString('en-US', {
      month: 'numeric',
    })
  );
  const day = date.getDate();

  const fullMonth = month < 10 ? `0${month}` : month;
  const fullDay = day < 10 ? `0${day}` : day;
  return `${year}-${fullMonth}-${fullDay}`;
};

@Injectable()
export class CalorieRecordService
  implements PrismaCrud<CalorieRecord, Prisma.CalorieRecordSelect>
{
  constructor(
    private readonly prisma: PrismaService,
    private readonly personService: PersonService
  ) {}

  async addRecord(
    userId: string,
    caloriesToAdd: number,
    select: Prisma.CalorieRecordSelect,
    weight?: number
  ): Promise<Partial<CalorieRecord>> {
    // Update weight for person.
    // This person will also be used to work with CalorieRecords
    const person = (await this.personService.update(
      {
        data: {
          weightLbs: {
            set: weight,
          },
        },
        where: {
          userId,
        },
      },
      {
        birthday: true,
        heightIn: true,
        id: true,
        weightLbs: true,
      }
    )) as Pick<Person, 'birthday' | 'heightIn' | 'id' | 'weightLbs'>;

    if (isNullOrUndefined(person)) {
      throw new NotFoundException(DATA_NOT_FOUND);
    }

    // Get records from last two days, so we can compare database isoString to
    // 'YYYY-MM-DD', we don't care about time recorded.
    const dateString = recordDateFormat();
    const lastFewRecords = await this.findMany(
      {
        where: {
          Person: {
            is: {
              id: {
                equals: person.id,
              },
            },
          },
          createdAt: {
            gte: new Date(Date.now() - ms('2d')),
          },
        },
      },
      {
        calories: true,
        createdAt: true,
      }
    );

    // Filter results to get only today's records and
    // Total the number of calories so far.
    let totalCalories = 0;
    const todaysRecords = lastFewRecords.filter(record => {
      if (record.createdAt?.toISOString().startsWith(dateString) !== true) {
        return;
      }

      if (typeof record.calories !== 'undefined') {
        totalCalories += record.calories;
      }

      return record;
    });

    // Get calories allowed by BMI calculation.
    const weightInKg = person.weightLbs * 0.453_592;
    const heightInCm = person.heightIn * 2.54;
    const age = ageFromBirthday(person.birthday);
    let dailyAllowedCalories =
      10 * weightInKg + 6.25 * heightInCm - 5 * age + 5;

    // If this is the first record of the day,
    // get calorie deficit from yesterday
    if (todaysRecords.length === 0) {
      const lastRecord = await this.prisma.calorieRecord.findFirst({
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          leftForToday: true,
        },
      });

      dailyAllowedCalories += lastRecord?.leftForToday ?? 0;
    }

    // Remove old, irrelevant records
    this.deleteMany({
      where: {
        Person: {
          is: {
            id: {
              equals: person.id,
            },
          },
        },
        createdAt: {
          lt: new Date(Date.now() - ms('2d')),
        },
      },
    }).catch((error: Error) => {
      console.error(error);
    });

    // Create with number of calories in this record and record the amount left
    // for today. This will be displayed on the frontend and is used to
    // calculate deficits.
    return this.create(
      {
        data: {
          Person: {
            connect: {
              id: person.id,
            },
          },
          calories: caloriesToAdd,
          leftForToday: Math.round(
            dailyAllowedCalories - totalCalories - caloriesToAdd
          ),
        },
      },
      select
    );
  }

  async create(
    data: CreateOneCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Partial<CalorieRecord>> {
    return this.prisma.calorieRecord.create({
      ...data,
      select,
    });
  }

  async createMany(
    data: CreateManyCalorieRecordArgs
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.calorieRecord.createMany(data);
  }

  async delete(
    data: DeleteOneCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Partial<CalorieRecord>> {
    return this.prisma.calorieRecord.delete({
      ...data,
      select,
    });
  }

  async deleteMany(
    data: DeleteManyCalorieRecordArgs
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.calorieRecord.deleteMany(data);
  }

  async findFirst(
    data: FindFirstCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Partial<CalorieRecord> | undefined> {
    const record = await this.prisma.calorieRecord.findFirst({
      ...data,
      select,
    });

    if (record === null) {
      return;
    }

    return record;
  }

  async findMany(
    data: FindManyCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Array<Partial<CalorieRecord>>> {
    return this.prisma.calorieRecord.findMany({
      ...data,
      select,
    });
  }

  async findUnique(
    data: FindUniqueCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Partial<CalorieRecord> | undefined> {
    const record = await this.prisma.calorieRecord.findUnique({
      ...data,
      select,
    });

    if (record === null) {
      return;
    }

    return record;
  }

  async update(
    data: UpdateOneCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Partial<CalorieRecord>> {
    return this.prisma.calorieRecord.update({
      ...data,
      select,
    });
  }

  async updateMany(data: UpdateManyHabitArgs): Promise<Prisma.BatchPayload> {
    return this.prisma.calorieRecord.updateMany(data);
  }

  async upsert(
    data: UpsertOneCalorieRecordArgs,
    select?: Prisma.CalorieRecordSelect
  ): Promise<Partial<CalorieRecord>> {
    return this.prisma.calorieRecord.upsert({
      ...data,
      select,
    });
  }
}
