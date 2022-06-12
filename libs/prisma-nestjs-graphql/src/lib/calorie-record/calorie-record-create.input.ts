import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutCalorieInput } from '../person/person-create-nested-one-without-calorie.input';

@InputType()
export class CalorieRecordCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:true})
    leftForToday?: number;

    @Field(() => PersonCreateNestedOneWithoutCalorieInput, {nullable:false})
    Person!: PersonCreateNestedOneWithoutCalorieInput;
}
