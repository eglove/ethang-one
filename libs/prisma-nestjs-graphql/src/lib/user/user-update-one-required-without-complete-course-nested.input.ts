import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCompleteCourseInput } from './user-create-without-complete-course.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCompleteCourseInput } from './user-create-or-connect-without-complete-course.input';
import { UserUpsertWithoutCompleteCourseInput } from './user-upsert-without-complete-course.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCompleteCourseInput } from './user-update-without-complete-course.input';

@InputType()
export class UserUpdateOneRequiredWithoutCompleteCourseNestedInput {

    @Field(() => UserCreateWithoutCompleteCourseInput, {nullable:true})
    @Type(() => UserCreateWithoutCompleteCourseInput)
    create?: UserCreateWithoutCompleteCourseInput;

    @Field(() => UserCreateOrConnectWithoutCompleteCourseInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCompleteCourseInput)
    connectOrCreate?: UserCreateOrConnectWithoutCompleteCourseInput;

    @Field(() => UserUpsertWithoutCompleteCourseInput, {nullable:true})
    @Type(() => UserUpsertWithoutCompleteCourseInput)
    upsert?: UserUpsertWithoutCompleteCourseInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCompleteCourseInput, {nullable:true})
    @Type(() => UserUpdateWithoutCompleteCourseInput)
    update?: UserUpdateWithoutCompleteCourseInput;
}
