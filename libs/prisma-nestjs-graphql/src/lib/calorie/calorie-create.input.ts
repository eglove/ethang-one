import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutCalorieInput } from '../person/person-create-nested-one-without-calorie.input';

@InputType()
export class CalorieCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    currentCount?: number;

    @Field(() => Int, {nullable:true})
    dailyCalories?: number;

    @Field(() => Int, {nullable:true})
    deficit?: number;

    @Field(() => PersonCreateNestedOneWithoutCalorieInput, {nullable:false})
    Person!: PersonCreateNestedOneWithoutCalorieInput;
}
