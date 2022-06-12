import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieUpdateInput } from './calorie-update.input';
import { Type } from 'class-transformer';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';

@ArgsType()
export class UpdateOneCalorieArgs {

    @Field(() => CalorieUpdateInput, {nullable:false})
    @Type(() => CalorieUpdateInput)
    data!: CalorieUpdateInput;

    @Field(() => CalorieWhereUniqueInput, {nullable:false})
    @Type(() => CalorieWhereUniqueInput)
    where!: CalorieWhereUniqueInput;
}
