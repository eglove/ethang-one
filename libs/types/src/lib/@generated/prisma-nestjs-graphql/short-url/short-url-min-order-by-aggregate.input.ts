import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShortUrlMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    originalUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    usedKeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;
}
