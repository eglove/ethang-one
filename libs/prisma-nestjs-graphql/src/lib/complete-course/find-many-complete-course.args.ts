import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseWhereInput } from './complete-course-where.input';
import { Type } from 'class-transformer';
import { CompleteCourseOrderByWithRelationInput } from './complete-course-order-by-with-relation.input';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompleteCourseScalarFieldEnum } from './complete-course-scalar-field.enum';

@ArgsType()
export class FindManyCompleteCourseArgs {

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    @Type(() => CompleteCourseWhereInput)
    where?: CompleteCourseWhereInput;

    @Field(() => [CompleteCourseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CompleteCourseOrderByWithRelationInput>;

    @Field(() => CompleteCourseWhereUniqueInput, {nullable:true})
    cursor?: CompleteCourseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CompleteCourseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CompleteCourseScalarFieldEnum>;
}
