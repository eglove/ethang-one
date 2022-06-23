import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ToReadLinkOrderByRelationAggregateInput } from '../to-read-link/to-read-link-order-by-relation-aggregate.input';
import { PersonOrderByWithRelationInput } from '../person/person-order-by-with-relation.input';
import { CompleteCourseOrderByRelationAggregateInput } from '../complete-course/complete-course-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => ToReadLinkOrderByRelationAggregateInput, {nullable:true})
    toReadLinks?: ToReadLinkOrderByRelationAggregateInput;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    Person?: PersonOrderByWithRelationInput;

    @Field(() => CompleteCourseOrderByRelationAggregateInput, {nullable:true})
    CompleteCourse?: CompleteCourseOrderByRelationAggregateInput;
}
