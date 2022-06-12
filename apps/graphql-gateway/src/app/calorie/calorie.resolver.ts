import {
  Calorie,
  CreateOneCalorieArgs,
  FindManyCalorieArgs,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import {
  nestReturnCalorie,
  nestReturnCalorieArray,
} from '../util/nest-decorator-returns';
import { nestSelect } from '../util/nest-select';
import { CalorieService } from './calorie.service';

@Resolver()
export class CalorieResolver {
  constructor(private readonly calorieService: CalorieService) {}

  @Mutation(nestReturnCalorie)
  async createCalorie(
    @Args() data: CreateOneCalorieArgs,
    @Info() info: GraphQLResolveInfo
  ): Promise<Partial<Calorie>> {
    return this.calorieService.create(data, nestSelect(info));
  }

  @Query(nestReturnCalorieArray)
  async calories(
    @Args() data: FindManyCalorieArgs,
    @Info() info: GraphQLResolveInfo
  ): Promise<Array<Partial<Calorie>>> {
    return this.calorieService.findMany(data, nestSelect(info));
  }
}
