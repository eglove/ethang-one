import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShortUrlCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    originalUrl!: number;

    @Field(() => Int, {nullable:false})
    usedKeyId!: number;

    @Field(() => Int, {nullable:false})
    expirationDate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
