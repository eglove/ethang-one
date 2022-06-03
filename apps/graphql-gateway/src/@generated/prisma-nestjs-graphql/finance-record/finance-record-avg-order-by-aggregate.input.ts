import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FinanceRecordAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    currentValue?: keyof typeof SortOrder;
}
