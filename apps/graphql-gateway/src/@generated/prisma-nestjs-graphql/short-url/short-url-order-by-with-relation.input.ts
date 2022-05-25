import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsedKeyOrderByWithRelationInput } from '../used-key/used-key-order-by-with-relation.input';

@InputType()
export class ShortUrlOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    originalUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    usedKeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expirationDate?: keyof typeof SortOrder;

    @Field(() => UsedKeyOrderByWithRelationInput, {nullable:true})
    shortUrlKey?: UsedKeyOrderByWithRelationInput;
}
