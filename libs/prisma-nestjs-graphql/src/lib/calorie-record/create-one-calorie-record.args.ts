import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordCreateInput } from './calorie-record-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCalorieRecordArgs {

    @Field(() => CalorieRecordCreateInput, {nullable:false})
    @Type(() => CalorieRecordCreateInput)
    data!: CalorieRecordCreateInput;
}
