import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Type } from 'class-transformer';
import { CalorieRecordUpdateWithoutPersonInput } from './calorie-record-update-without-person.input';

@InputType()
export class CalorieRecordUpdateWithWhereUniqueWithoutPersonInput {

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:false})
    @Type(() => CalorieRecordWhereUniqueInput)
    where!: CalorieRecordWhereUniqueInput;

    @Field(() => CalorieRecordUpdateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieRecordUpdateWithoutPersonInput)
    data!: CalorieRecordUpdateWithoutPersonInput;
}
