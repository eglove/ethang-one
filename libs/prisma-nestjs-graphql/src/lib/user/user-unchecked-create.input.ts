import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUncheckedCreateNestedOneWithoutUserInput } from '../person/person-unchecked-create-nested-one-without-user.input';
import { CompleteCourseUncheckedCreateNestedManyWithoutUserInput } from '../complete-course/complete-course-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

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

    @Field(() => PersonUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    Person?: PersonUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => CompleteCourseUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseUncheckedCreateNestedManyWithoutUserInput;
}
