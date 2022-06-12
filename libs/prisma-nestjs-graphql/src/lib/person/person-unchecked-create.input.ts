import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CalorieUncheckedCreateNestedOneWithoutPersonInput } from '../calorie/calorie-unchecked-create-nested-one-without-person.input';

@InputType()
export class PersonUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    birthday!: Date | string;

    @Field(() => Float, {nullable:false})
    weightLbs!: number;

    @Field(() => Float, {nullable:false})
    heightIn!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CalorieUncheckedCreateNestedOneWithoutPersonInput, {nullable:true})
    Calorie?: CalorieUncheckedCreateNestedOneWithoutPersonInput;
}
