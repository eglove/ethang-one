import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseUpdateManyMutationInput } from './complete-course-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CompleteCourseWhereInput } from './complete-course-where.input';

@ArgsType()
export class UpdateManyCompleteCourseArgs {

    @Field(() => CompleteCourseUpdateManyMutationInput, {nullable:false})
    @Type(() => CompleteCourseUpdateManyMutationInput)
    data!: CompleteCourseUpdateManyMutationInput;

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    @Type(() => CompleteCourseWhereInput)
    where?: CompleteCourseWhereInput;
}
