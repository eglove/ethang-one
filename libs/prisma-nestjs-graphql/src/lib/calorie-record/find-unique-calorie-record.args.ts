import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCalorieRecordArgs {

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:false})
    @Type(() => CalorieRecordWhereUniqueInput)
    where!: CalorieRecordWhereUniqueInput;
}
