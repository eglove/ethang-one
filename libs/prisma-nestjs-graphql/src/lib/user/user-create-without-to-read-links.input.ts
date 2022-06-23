import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateNestedOneWithoutUserInput } from '../person/person-create-nested-one-without-user.input';
import { CompleteCourseCreateNestedManyWithoutUserInput } from '../complete-course/complete-course-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutToReadLinksInput {

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

    @Field(() => PersonCreateNestedOneWithoutUserInput, {nullable:true})
    Person?: PersonCreateNestedOneWithoutUserInput;

    @Field(() => CompleteCourseCreateNestedManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseCreateNestedManyWithoutUserInput;
}
