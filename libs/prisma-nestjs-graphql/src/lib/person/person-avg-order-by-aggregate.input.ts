import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PersonAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    weightLbs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    heightIn?: keyof typeof SortOrder;
}
