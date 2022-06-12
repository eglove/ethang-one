import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieWhereInput } from './calorie-where.input';

@InputType()
export class CalorieRelationFilter {

    @Field(() => CalorieWhereInput, {nullable:true})
    is?: CalorieWhereInput;

    @Field(() => CalorieWhereInput, {nullable:true})
    isNot?: CalorieWhereInput;
}
