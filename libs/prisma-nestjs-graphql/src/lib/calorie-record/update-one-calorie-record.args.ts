import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordUpdateInput } from './calorie-record-update.input';
import { Type } from 'class-transformer';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';

@ArgsType()
export class UpdateOneCalorieRecordArgs {

    @Field(() => CalorieRecordUpdateInput, {nullable:false})
    @Type(() => CalorieRecordUpdateInput)
    data!: CalorieRecordUpdateInput;

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:false})
    @Type(() => CalorieRecordWhereUniqueInput)
    where!: CalorieRecordWhereUniqueInput;
}
