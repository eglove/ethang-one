import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesCreateManyInput } from './todays-calories-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTodaysCaloriesArgs {

    @Field(() => [TodaysCaloriesCreateManyInput], {nullable:false})
    @Type(() => TodaysCaloriesCreateManyInput)
    data!: Array<TodaysCaloriesCreateManyInput>;
}
