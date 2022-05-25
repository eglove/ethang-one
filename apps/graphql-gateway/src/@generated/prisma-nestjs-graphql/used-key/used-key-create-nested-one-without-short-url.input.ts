import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyCreateWithoutShortUrlInput } from './used-key-create-without-short-url.input';
import { UsedKeyCreateOrConnectWithoutShortUrlInput } from './used-key-create-or-connect-without-short-url.input';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';

@InputType()
export class UsedKeyCreateNestedOneWithoutShortUrlInput {

    @Field(() => UsedKeyCreateWithoutShortUrlInput, {nullable:true})
    create?: UsedKeyCreateWithoutShortUrlInput;

    @Field(() => UsedKeyCreateOrConnectWithoutShortUrlInput, {nullable:true})
    connectOrCreate?: UsedKeyCreateOrConnectWithoutShortUrlInput;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:true})
    connect?: UsedKeyWhereUniqueInput;
}
