import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { Type } from 'class-transformer';
import { CompleteCourseUpdateWithoutUserInput } from './complete-course-update-without-user.input';

@InputType()
export class CompleteCourseUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CompleteCourseWhereUniqueInput, {nullable:false})
    @Type(() => CompleteCourseWhereUniqueInput)
    where!: CompleteCourseWhereUniqueInput;

    @Field(() => CompleteCourseUpdateWithoutUserInput, {nullable:false})
    @Type(() => CompleteCourseUpdateWithoutUserInput)
    data!: CompleteCourseUpdateWithoutUserInput;
}
