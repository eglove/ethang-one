import {
  CalorieRecord,
  FindFirstCalorieRecordArgs,
  FindUniqueCalorieRecordArgs,
} from '@ethang/prisma-nestjs-graphql';
import { ageFromBirthday } from '@ethang/util-typescript';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import ms from 'ms';

import { PrismaService } from '../prisma/prisma.service';

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
export class CalorieRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async addRecord(
    userId: string,
    caloriesToAdd: number,
    select: Prisma.CalorieRecordSelect,
    weight?: number
  ): Promise<Partial<CalorieRecord>> {
    // Update weight for person.
    // This person will also be used to work with CalorieRecords
    const person = await this.prisma.person.update({
      data: {
        weightLbs: weight,
      },
      select: {
        birthday: true,
        heightIn: true,
        id: true,
        weightLbs: true,
      },
      where: {
        userId,
      },
    });

    if (person === null) {
      throw new NotFoundException(DATA_NOT_FOUND);
    }

    // Get records from last two days, so we can compare database isoString to
    // 'YYYY-MM-DD', we don't care about time recorded.
    const dateString = recordDateFormat();
    const lastFewRecords = await this.prisma.calorieRecord.findMany({
      select: {
        calories: true,
        createdAt: true,
      },
      where: {
        Person: {
          id: person.id,
        },
        createdAt: {
          gte: new Date(Date.now() - ms('2d')),
        },
      },
    });

    // Filter results to get only today's records and
    // Total the number of calories so far.
    let totalCalories = 0;
    const todaysRecords = lastFewRecords.filter(record => {
      if (!record.createdAt.toISOString().startsWith(dateString)) {
        return;
      }

      totalCalories += record.calories;
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

    // Create with number of calories in this record and record the amount left
    // for today. This will be displayed on the frontend and is used to
    // calculate deficits.
    return this.prisma.calorieRecord.create({
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
      select,
    });
  }

  async findFirst(
    data: FindFirstCalorieRecordArgs,
    select: Prisma.CalorieRecordSelect
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

  async findUnique(
    data: FindUniqueCalorieRecordArgs,
    select: Prisma.CalorieRecordSelect
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
}
