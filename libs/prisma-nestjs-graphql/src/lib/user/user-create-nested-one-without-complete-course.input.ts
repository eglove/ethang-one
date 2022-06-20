import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompleteCourseInput } from './user-create-without-complete-course.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCompleteCourseInput } from './user-create-or-connect-without-complete-course.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCompleteCourseInput {

    @Field(() => UserCreateWithoutCompleteCourseInput, {nullable:true})
    @Type(() => UserCreateWithoutCompleteCourseInput)
    create?: UserCreateWithoutCompleteCourseInput;

    @Field(() => UserCreateOrConnectWithoutCompleteCourseInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCompleteCourseInput)
    connectOrCreate?: UserCreateOrConnectWithoutCompleteCourseInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
