import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordWhereInput } from './calorie-record-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCalorieRecordArgs {

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    @Type(() => CalorieRecordWhereInput)
    where?: CalorieRecordWhereInput;
}
