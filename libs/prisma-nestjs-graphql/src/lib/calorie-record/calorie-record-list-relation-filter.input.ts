import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordWhereInput } from './calorie-record-where.input';

@InputType()
export class CalorieRecordListRelationFilter {

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    every?: CalorieRecordWhereInput;

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    some?: CalorieRecordWhereInput;

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    none?: CalorieRecordWhereInput;
}
