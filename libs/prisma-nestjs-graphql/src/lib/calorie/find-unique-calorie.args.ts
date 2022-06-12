import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCalorieArgs {

    @Field(() => CalorieWhereUniqueInput, {nullable:false})
    @Type(() => CalorieWhereUniqueInput)
    where!: CalorieWhereUniqueInput;
}
