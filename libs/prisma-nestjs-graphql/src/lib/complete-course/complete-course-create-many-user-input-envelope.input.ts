import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseCreateManyUserInput } from './complete-course-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CompleteCourseCreateManyUserInputEnvelope {

    @Field(() => [CompleteCourseCreateManyUserInput], {nullable:false})
    @Type(() => CompleteCourseCreateManyUserInput)
    data!: Array<CompleteCourseCreateManyUserInput>;
}
