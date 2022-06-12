import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CalorieRecordOrderByRelationAggregateInput } from '../calorie-record/calorie-record-order-by-relation-aggregate.input';

@InputType()
export class PersonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weightLbs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    heightIn?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => CalorieRecordOrderByRelationAggregateInput, {nullable:true})
    Calorie?: CalorieRecordOrderByRelationAggregateInput;
}
