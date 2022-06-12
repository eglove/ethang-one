import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieWhereInput } from './calorie-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCalorieArgs {

    @Field(() => CalorieWhereInput, {nullable:true})
    @Type(() => CalorieWhereInput)
    where?: CalorieWhereInput;
}
