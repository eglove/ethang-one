import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { Type } from 'class-transformer';
import { CompleteCourseCreateInput } from './complete-course-create.input';
import { CompleteCourseUpdateInput } from './complete-course-update.input';

@ArgsType()
export class UpsertOneCompleteCourseArgs {

    @Field(() => CompleteCourseWhereUniqueInput, {nullable:false})
    @Type(() => CompleteCourseWhereUniqueInput)
    where!: CompleteCourseWhereUniqueInput;

    @Field(() => CompleteCourseCreateInput, {nullable:false})
    @Type(() => CompleteCourseCreateInput)
    create!: CompleteCourseCreateInput;

    @Field(() => CompleteCourseUpdateInput, {nullable:false})
    @Type(() => CompleteCourseUpdateInput)
    update!: CompleteCourseUpdateInput;
}
