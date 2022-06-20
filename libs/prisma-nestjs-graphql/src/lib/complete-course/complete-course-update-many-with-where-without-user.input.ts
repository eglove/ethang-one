import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseScalarWhereInput } from './complete-course-scalar-where.input';
import { Type } from 'class-transformer';
import { CompleteCourseUpdateManyMutationInput } from './complete-course-update-many-mutation.input';

@InputType()
export class CompleteCourseUpdateManyWithWhereWithoutUserInput {

    @Field(() => CompleteCourseScalarWhereInput, {nullable:false})
    @Type(() => CompleteCourseScalarWhereInput)
    where!: CompleteCourseScalarWhereInput;

    @Field(() => CompleteCourseUpdateManyMutationInput, {nullable:false})
    @Type(() => CompleteCourseUpdateManyMutationInput)
    data!: CompleteCourseUpdateManyMutationInput;
}
