import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutCalorieInput } from './person-create-without-calorie.input';

@InputType()
export class PersonCreateOrConnectWithoutCalorieInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: PersonWhereUniqueInput;

    @Field(() => PersonCreateWithoutCalorieInput, {nullable:false})
    @Type(() => PersonCreateWithoutCalorieInput)
    create!: PersonCreateWithoutCalorieInput;
}
