import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';
import { Type } from 'class-transformer';
import { CalorieCreateInput } from './calorie-create.input';
import { CalorieUpdateInput } from './calorie-update.input';

@ArgsType()
export class UpsertOneCalorieArgs {

    @Field(() => CalorieWhereUniqueInput, {nullable:false})
    @Type(() => CalorieWhereUniqueInput)
    where!: CalorieWhereUniqueInput;

    @Field(() => CalorieCreateInput, {nullable:false})
    @Type(() => CalorieCreateInput)
    create!: CalorieCreateInput;

    @Field(() => CalorieUpdateInput, {nullable:false})
    @Type(() => CalorieUpdateInput)
    update!: CalorieUpdateInput;
}
