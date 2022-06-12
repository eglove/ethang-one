import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutCalorieInput } from './person-update-without-calorie.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutCalorieInput } from './person-create-without-calorie.input';

@InputType()
export class PersonUpsertWithoutCalorieInput {

    @Field(() => PersonUpdateWithoutCalorieInput, {nullable:false})
    @Type(() => PersonUpdateWithoutCalorieInput)
    update!: PersonUpdateWithoutCalorieInput;

    @Field(() => PersonCreateWithoutCalorieInput, {nullable:false})
    @Type(() => PersonCreateWithoutCalorieInput)
    create!: PersonCreateWithoutCalorieInput;
}
