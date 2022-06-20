import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CompleteCourseCountOrderByAggregateInput } from './complete-course-count-order-by-aggregate.input';
import { CompleteCourseMaxOrderByAggregateInput } from './complete-course-max-order-by-aggregate.input';
import { CompleteCourseMinOrderByAggregateInput } from './complete-course-min-order-by-aggregate.input';

@InputType()
export class CompleteCourseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => CompleteCourseCountOrderByAggregateInput, {nullable:true})
    _count?: CompleteCourseCountOrderByAggregateInput;

    @Field(() => CompleteCourseMaxOrderByAggregateInput, {nullable:true})
    _max?: CompleteCourseMaxOrderByAggregateInput;

    @Field(() => CompleteCourseMinOrderByAggregateInput, {nullable:true})
    _min?: CompleteCourseMinOrderByAggregateInput;
}
