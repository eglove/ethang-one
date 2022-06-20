import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseWhereInput } from './complete-course-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCompleteCourseArgs {

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    @Type(() => CompleteCourseWhereInput)
    where?: CompleteCourseWhereInput;
}
