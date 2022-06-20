import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseCreateInput } from './complete-course-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCompleteCourseArgs {

    @Field(() => CompleteCourseCreateInput, {nullable:false})
    @Type(() => CompleteCourseCreateInput)
    data!: CompleteCourseCreateInput;
}
