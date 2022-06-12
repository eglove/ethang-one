import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPersonInput } from '../user/user-create-nested-one-without-person.input';
import { CalorieCreateNestedOneWithoutPersonInput } from '../calorie/calorie-create-nested-one-without-person.input';

@InputType()
export class PersonCreateInput {

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

    @Field(() => UserCreateNestedOneWithoutPersonInput, {nullable:false})
    User!: UserCreateNestedOneWithoutPersonInput;

    @Field(() => CalorieCreateNestedOneWithoutPersonInput, {nullable:true})
    Calorie?: CalorieCreateNestedOneWithoutPersonInput;
}
