import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Type } from 'class-transformer';
import { CalorieRecordUpdateWithoutPersonInput } from './calorie-record-update-without-person.input';
import { CalorieRecordCreateWithoutPersonInput } from './calorie-record-create-without-person.input';

@InputType()
export class CalorieRecordUpsertWithWhereUniqueWithoutPersonInput {

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:false})
    @Type(() => CalorieRecordWhereUniqueInput)
    where!: CalorieRecordWhereUniqueInput;

    @Field(() => CalorieRecordUpdateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieRecordUpdateWithoutPersonInput)
    update!: CalorieRecordUpdateWithoutPersonInput;

    @Field(() => CalorieRecordCreateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieRecordCreateWithoutPersonInput)
    create!: CalorieRecordCreateWithoutPersonInput;
}
