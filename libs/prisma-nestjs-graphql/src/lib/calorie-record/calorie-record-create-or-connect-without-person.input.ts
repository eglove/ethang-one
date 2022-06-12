import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Type } from 'class-transformer';
import { CalorieRecordCreateWithoutPersonInput } from './calorie-record-create-without-person.input';

@InputType()
export class CalorieRecordCreateOrConnectWithoutPersonInput {

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:false})
    @Type(() => CalorieRecordWhereUniqueInput)
    where!: CalorieRecordWhereUniqueInput;

    @Field(() => CalorieRecordCreateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieRecordCreateWithoutPersonInput)
    create!: CalorieRecordCreateWithoutPersonInput;
}
