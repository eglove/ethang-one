import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Type } from 'class-transformer';
import { CalorieRecordCreateInput } from './calorie-record-create.input';
import { CalorieRecordUpdateInput } from './calorie-record-update.input';

@ArgsType()
export class UpsertOneCalorieRecordArgs {

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:false})
    @Type(() => CalorieRecordWhereUniqueInput)
    where!: CalorieRecordWhereUniqueInput;

    @Field(() => CalorieRecordCreateInput, {nullable:false})
    @Type(() => CalorieRecordCreateInput)
    create!: CalorieRecordCreateInput;

    @Field(() => CalorieRecordUpdateInput, {nullable:false})
    @Type(() => CalorieRecordUpdateInput)
    update!: CalorieRecordUpdateInput;
}
