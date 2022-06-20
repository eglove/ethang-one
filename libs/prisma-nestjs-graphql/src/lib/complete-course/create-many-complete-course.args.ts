import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseCreateManyInput } from './complete-course-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCompleteCourseArgs {

    @Field(() => [CompleteCourseCreateManyInput], {nullable:false})
    @Type(() => CompleteCourseCreateManyInput)
    data!: Array<CompleteCourseCreateManyInput>;
}
