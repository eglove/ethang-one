import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesWhereUniqueInput } from './todays-calories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesWhereUniqueInput, {nullable:false})
    @Type(() => TodaysCaloriesWhereUniqueInput)
    where!: TodaysCaloriesWhereUniqueInput;
}
