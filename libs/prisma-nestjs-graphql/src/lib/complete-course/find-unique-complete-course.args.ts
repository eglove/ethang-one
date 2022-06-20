import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCompleteCourseArgs {

    @Field(() => CompleteCourseWhereUniqueInput, {nullable:false})
    @Type(() => CompleteCourseWhereUniqueInput)
    where!: CompleteCourseWhereUniqueInput;
}
