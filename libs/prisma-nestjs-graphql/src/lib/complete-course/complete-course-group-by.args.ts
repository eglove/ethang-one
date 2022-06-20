import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CompleteCourseWhereInput } from './complete-course-where.input';
import { Type } from 'class-transformer';
import { CompleteCourseOrderByWithAggregationInput } from './complete-course-order-by-with-aggregation.input';
import { CompleteCourseScalarFieldEnum } from './complete-course-scalar-field.enum';
import { CompleteCourseScalarWhereWithAggregatesInput } from './complete-course-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CompleteCourseCountAggregateInput } from './complete-course-count-aggregate.input';
import { CompleteCourseMinAggregateInput } from './complete-course-min-aggregate.input';
import { CompleteCourseMaxAggregateInput } from './complete-course-max-aggregate.input';

@ArgsType()
export class CompleteCourseGroupByArgs {

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    @Type(() => CompleteCourseWhereInput)
    where?: CompleteCourseWhereInput;

    @Field(() => [CompleteCourseOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CompleteCourseOrderByWithAggregationInput>;

    @Field(() => [CompleteCourseScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CompleteCourseScalarFieldEnum>;

    @Field(() => CompleteCourseScalarWhereWithAggregatesInput, {nullable:true})
    having?: CompleteCourseScalarWhereWithAggregatesInput;

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
