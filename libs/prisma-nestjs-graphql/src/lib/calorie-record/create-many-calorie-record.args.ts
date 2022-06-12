import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordCreateManyInput } from './calorie-record-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCalorieRecordArgs {

    @Field(() => [CalorieRecordCreateManyInput], {nullable:false})
    @Type(() => CalorieRecordCreateManyInput)
    data!: Array<CalorieRecordCreateManyInput>;
}
