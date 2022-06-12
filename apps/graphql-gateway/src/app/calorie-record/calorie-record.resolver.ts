import {
  CalorieRecord,
  FindFirstCalorieRecordArgs,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { nestSelect } from '../util/nest-select';
import { CalorieRecordService } from './calorie-record.service';

@Resolver()
export class CalorieRecordResolver {
  constructor(private readonly calorieRecordService: CalorieRecordService) {}

  @Mutation((): typeof CalorieRecord => {
    return CalorieRecord;
  })
  async addCalorieRecord(
    @Args('userId') userId: string,
    @Args('caloriesToAdd') caloriesToAdd: number,
    @Info() info: GraphQLResolveInfo,
    @Args('weight', { nullable: true }) weight?: number
  ): Promise<Partial<CalorieRecord>> {
    return this.calorieRecordService.addRecord(
      userId,
      caloriesToAdd,
      nestSelect(info),
      weight
    );
  }

  @Query((): typeof CalorieRecord => {
    return CalorieRecord;
  })
  async calorieFirst(
    @Args() data: FindFirstCalorieRecordArgs,
    @Info() info: GraphQLResolveInfo
  ): Promise<Partial<CalorieRecord> | undefined> {
    return this.calorieRecordService.findFirst(data, nestSelect(info));
  }
}
