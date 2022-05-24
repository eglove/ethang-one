import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class UsedKey {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    key!: string;
}
