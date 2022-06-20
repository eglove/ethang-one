import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { Type } from 'class-transformer';
import { CompleteCourseCreateWithoutUserInput } from './complete-course-create-without-user.input';

@InputType()
export class CompleteCourseCreateOrConnectWithoutUserInput {

    @Field(() => CompleteCourseWhereUniqueInput, {nullable:false})
    @Type(() => CompleteCourseWhereUniqueInput)
    where!: CompleteCourseWhereUniqueInput;

    @Field(() => CompleteCourseCreateWithoutUserInput, {nullable:false})
    @Type(() => CompleteCourseCreateWithoutUserInput)
    create!: CompleteCourseCreateWithoutUserInput;
}
