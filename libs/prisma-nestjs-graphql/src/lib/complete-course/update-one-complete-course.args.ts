import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseUpdateInput } from './complete-course-update.input';
import { Type } from 'class-transformer';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';

@ArgsType()
export class UpdateOneCompleteCourseArgs {

    @Field(() => CompleteCourseUpdateInput, {nullable:false})
    @Type(() => CompleteCourseUpdateInput)
    data!: CompleteCourseUpdateInput;

    @Field(() => CompleteCourseWhereUniqueInput, {nullable:false})
    @Type(() => CompleteCourseWhereUniqueInput)
    where!: CompleteCourseWhereUniqueInput;
}
