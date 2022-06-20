import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCompleteCourseInput } from '../user/user-create-nested-one-without-complete-course.input';

@InputType()
export class CompleteCourseCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => UserCreateNestedOneWithoutCompleteCourseInput, {nullable:false})
    User!: UserCreateNestedOneWithoutCompleteCourseInput;
}
