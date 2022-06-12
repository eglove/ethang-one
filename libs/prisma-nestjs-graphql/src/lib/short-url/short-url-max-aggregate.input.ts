import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortUrlMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    originalUrl?: true;

    @Field(() => Boolean, {nullable:true})
    usedKeyId?: true;

    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
}
