import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCompleteCourseInput } from './user-create-without-complete-course.input';

@InputType()
export class UserCreateOrConnectWithoutCompleteCourseInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCompleteCourseInput, {nullable:false})
    @Type(() => UserCreateWithoutCompleteCourseInput)
    create!: UserCreateWithoutCompleteCourseInput;
}