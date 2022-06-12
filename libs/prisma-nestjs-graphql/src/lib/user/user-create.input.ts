import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutUserInput } from '../person/person-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:true})
    Person?: PersonCreateNestedOneWithoutUserInput;
}
