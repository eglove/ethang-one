import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShortUrlOrderByWithRelationInput } from '../short-url/short-url-order-by-with-relation.input';

@InputType()
export class UsedKeyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => ShortUrlOrderByWithRelationInput, {nullable:true})
    ShortUrl?: ShortUrlOrderByWithRelationInput;
}
