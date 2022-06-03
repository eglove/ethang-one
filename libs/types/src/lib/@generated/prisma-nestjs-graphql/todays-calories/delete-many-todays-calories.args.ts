import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    @Type(() => TodaysCaloriesWhereInput)
    where?: TodaysCaloriesWhereInput;
}
