import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShortUrlMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    originalUrl?: string;

    @Field(() => String, {nullable:true})
    usedKeyId?: string;

    @Field(() => Date, {nullable:true})
    expirationDate?: Date | string;
}
