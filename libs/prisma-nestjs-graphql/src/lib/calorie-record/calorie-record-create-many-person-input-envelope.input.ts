import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordCreateManyPersonInput } from './calorie-record-create-many-person.input';
import { Type } from 'class-transformer';

@InputType()
export class CalorieRecordCreateManyPersonInputEnvelope {

    @Field(() => [CalorieRecordCreateManyPersonInput], {nullable:false})
    @Type(() => CalorieRecordCreateManyPersonInput)
    data!: Array<CalorieRecordCreateManyPersonInput>;
}
