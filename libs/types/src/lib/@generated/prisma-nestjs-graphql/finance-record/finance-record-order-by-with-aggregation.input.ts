import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FinanceRecordCountOrderByAggregateInput } from './finance-record-count-order-by-aggregate.input';
import { FinanceRecordAvgOrderByAggregateInput } from './finance-record-avg-order-by-aggregate.input';
import { FinanceRecordMaxOrderByAggregateInput } from './finance-record-max-order-by-aggregate.input';
import { FinanceRecordMinOrderByAggregateInput } from './finance-record-min-order-by-aggregate.input';
import { FinanceRecordSumOrderByAggregateInput } from './finance-record-sum-order-by-aggregate.input';

@InputType()
export class FinanceRecordOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recordedDate?: keyof typeof SortOrder;

    @Field(() => FinanceRecordCountOrderByAggregateInput, {nullable:true})
    _count?: FinanceRecordCountOrderByAggregateInput;

    @Field(() => FinanceRecordAvgOrderByAggregateInput, {nullable:true})
    _avg?: FinanceRecordAvgOrderByAggregateInput;

    @Field(() => FinanceRecordMaxOrderByAggregateInput, {nullable:true})
    _max?: FinanceRecordMaxOrderByAggregateInput;

    @Field(() => FinanceRecordMinOrderByAggregateInput, {nullable:true})
    _min?: FinanceRecordMinOrderByAggregateInput;

    @Field(() => FinanceRecordSumOrderByAggregateInput, {nullable:true})
    _sum?: FinanceRecordSumOrderByAggregateInput;
}
