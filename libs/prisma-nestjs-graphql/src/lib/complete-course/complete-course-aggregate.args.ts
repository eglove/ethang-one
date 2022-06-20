import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseWhereInput } from './complete-course-where.input';
import { Type } from 'class-transformer';
import { CompleteCourseOrderByWithRelationInput } from './complete-course-order-by-with-relation.input';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CompleteCourseCountAggregateInput } from './complete-course-count-aggregate.input';
import { CompleteCourseMinAggregateInput } from './complete-course-min-aggregate.input';
import { CompleteCourseMaxAggregateInput } from './complete-course-max-aggregate.input';

@ArgsType()
export class CompleteCourseAggregateArgs {

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

    @Field(() => CompleteCourseCountAggregateInput, {nullable:true})
    _count?: CompleteCourseCountAggregateInput;

    @Field(() => CompleteCourseMinAggregateInput, {nullable:true})
    _min?: CompleteCourseMinAggregateInput;

    @Field(() => CompleteCourseMaxAggregateInput, {nullable:true})
    _max?: CompleteCourseMaxAggregateInput;
}
