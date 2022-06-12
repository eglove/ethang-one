import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UsedKey } from '../used-key/used-key.model';

@ObjectType()
export class ShortUrl {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    originalUrl!: string;

    @Field(() => String, {nullable:false})
    usedKeyId!: string;

    @Field(() => Date, {nullable:false})
    expirationDate!: Date;

    @Field(() => UsedKey, {nullable:false})
    shortUrlKey?: UsedKey;
}
