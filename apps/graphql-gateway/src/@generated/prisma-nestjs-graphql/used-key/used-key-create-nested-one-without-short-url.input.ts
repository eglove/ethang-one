import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyCreateWithoutShortUrlInput } from './used-key-create-without-short-url.input';
import { Type } from 'class-transformer';
import { UsedKeyCreateOrConnectWithoutShortUrlInput } from './used-key-create-or-connect-without-short-url.input';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';

@InputType()
export class UsedKeyCreateNestedOneWithoutShortUrlInput {

    @Field(() => UsedKeyCreateWithoutShortUrlInput, {nullable:true})
    @Type(() => UsedKeyCreateWithoutShortUrlInput)
    create?: UsedKeyCreateWithoutShortUrlInput;

    @Field(() => UsedKeyCreateOrConnectWithoutShortUrlInput, {nullable:true})
    @Type(() => UsedKeyCreateOrConnectWithoutShortUrlInput)
    connectOrCreate?: UsedKeyCreateOrConnectWithoutShortUrlInput;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:true})
    @Type(() => UsedKeyWhereUniqueInput)
    connect?: UsedKeyWhereUniqueInput;
}
