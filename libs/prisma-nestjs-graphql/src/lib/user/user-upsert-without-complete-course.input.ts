import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCompleteCourseInput } from './user-update-without-complete-course.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCompleteCourseInput } from './user-create-without-complete-course.input';

@InputType()
export class UserUpsertWithoutCompleteCourseInput {

    @Field(() => UserUpdateWithoutCompleteCourseInput, {nullable:false})
    @Type(() => UserUpdateWithoutCompleteCourseInput)
    update!: UserUpdateWithoutCompleteCourseInput;

    @Field(() => UserCreateWithoutCompleteCourseInput, {nullable:false})
    @Type(() => UserCreateWithoutCompleteCourseInput)
    create!: UserCreateWithoutCompleteCourseInput;
}
