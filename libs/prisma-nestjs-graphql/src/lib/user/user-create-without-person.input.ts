import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkCreateNestedManyWithoutUserInput } from '../to-read-link/to-read-link-create-nested-many-without-user.input';
import { CompleteCourseCreateNestedManyWithoutUserInput } from '../complete-course/complete-course-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutPersonInput {

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

    @Field(() => CompleteCourseCreateNestedManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseCreateNestedManyWithoutUserInput;
}
