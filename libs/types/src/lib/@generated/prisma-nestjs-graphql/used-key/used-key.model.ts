import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ShortUrl } from '../short-url/short-url.model';

@ObjectType()
export class UsedKey {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => ShortUrl, {nullable:true})
    ShortUrl?: ShortUrl | null;
}
