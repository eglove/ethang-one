import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CalorieUncheckedCreateNestedOneWithoutPersonInput } from '../calorie/calorie-unchecked-create-nested-one-without-person.input';

@InputType()
export class PersonUncheckedCreateWithoutUserInput {

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

    @Field(() => CalorieUncheckedCreateNestedOneWithoutPersonInput, {nullable:true})
    Calorie?: CalorieUncheckedCreateNestedOneWithoutPersonInput;
}
