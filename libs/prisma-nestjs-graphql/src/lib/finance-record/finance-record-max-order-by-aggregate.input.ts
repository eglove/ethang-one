import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FinanceRecordMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currentValue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recordedDate?: keyof typeof SortOrder;
}
