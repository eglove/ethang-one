import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseUncheckedCreateNestedManyWithoutUserInput } from '../complete-course/complete-course-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPersonInput {

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

    @Field(() => CompleteCourseUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseUncheckedCreateNestedManyWithoutUserInput;
}
