import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { UsedKeyCreateWithoutShortUrlInput } from './used-key-create-without-short-url.input';

@InputType()
export class UsedKeyCreateOrConnectWithoutShortUrlInput {

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    where!: UsedKeyWhereUniqueInput;

    @Field(() => UsedKeyCreateWithoutShortUrlInput, {nullable:false})
    create!: UsedKeyCreateWithoutShortUrlInput;
}
