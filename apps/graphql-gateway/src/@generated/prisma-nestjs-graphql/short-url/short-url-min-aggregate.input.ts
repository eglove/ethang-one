import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortUrlMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    originalUrl?: true;

    @Field(() => Boolean, {nullable:true})
    usedKeyId?: true;

    @Field(() => Boolean, {nullable:true})
    expirationDate?: true;
}
