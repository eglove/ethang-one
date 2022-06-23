import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkCreateNestedManyWithoutUserInput } from '../to-read-link/to-read-link-create-nested-many-without-user.input';
import { PersonCreateNestedOneWithoutUserInput } from '../person/person-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutCompleteCourseInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => ToReadLinkCreateNestedManyWithoutUserInput, {nullable:true})
    toReadLinks?: ToReadLinkCreateNestedManyWithoutUserInput;

    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:true})
    Person?: PersonCreateNestedOneWithoutUserInput;
}
