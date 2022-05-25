import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyCreateWithoutShortUrlInput } from './used-key-create-without-short-url.input';
import { Type } from 'class-transformer';
import { UsedKeyCreateOrConnectWithoutShortUrlInput } from './used-key-create-or-connect-without-short-url.input';
import { UsedKeyUpsertWithoutShortUrlInput } from './used-key-upsert-without-short-url.input';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { UsedKeyUpdateWithoutShortUrlInput } from './used-key-update-without-short-url.input';

@InputType()
export class UsedKeyUpdateOneRequiredWithoutShortUrlInput {

    @Field(() => UsedKeyCreateWithoutShortUrlInput, {nullable:true})
    @Type(() => UsedKeyCreateWithoutShortUrlInput)
    create?: UsedKeyCreateWithoutShortUrlInput;

    @Field(() => UsedKeyCreateOrConnectWithoutShortUrlInput, {nullable:true})
    @Type(() => UsedKeyCreateOrConnectWithoutShortUrlInput)
    connectOrCreate?: UsedKeyCreateOrConnectWithoutShortUrlInput;

    @Field(() => UsedKeyUpsertWithoutShortUrlInput, {nullable:true})
    @Type(() => UsedKeyUpsertWithoutShortUrlInput)
    upsert?: UsedKeyUpsertWithoutShortUrlInput;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:true})
    @Type(() => UsedKeyWhereUniqueInput)
    connect?: UsedKeyWhereUniqueInput;

    @Field(() => UsedKeyUpdateWithoutShortUrlInput, {nullable:true})
    @Type(() => UsedKeyUpdateWithoutShortUrlInput)
    update?: UsedKeyUpdateWithoutShortUrlInput;
}
