import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieUpdateWithoutPersonInput } from './calorie-update-without-person.input';
import { Type } from 'class-transformer';
import { CalorieCreateWithoutPersonInput } from './calorie-create-without-person.input';

@InputType()
export class CalorieUpsertWithoutPersonInput {

    @Field(() => CalorieUpdateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieUpdateWithoutPersonInput)
    update!: CalorieUpdateWithoutPersonInput;

    @Field(() => CalorieCreateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieCreateWithoutPersonInput)
    create!: CalorieCreateWithoutPersonInput;
}
