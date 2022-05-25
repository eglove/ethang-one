import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';
import { Type } from 'class-transformer';
import { ShortUrlCreateOrConnectWithoutShortUrlKeyInput } from './short-url-create-or-connect-without-short-url-key.input';
import { ShortUrlUpsertWithoutShortUrlKeyInput } from './short-url-upsert-without-short-url-key.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { ShortUrlUpdateWithoutShortUrlKeyInput } from './short-url-update-without-short-url-key.input';

@InputType()
export class ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput {

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:true})
    @Type(() => ShortUrlCreateWithoutShortUrlKeyInput)
    create?: ShortUrlCreateWithoutShortUrlKeyInput;

    @Field(() => ShortUrlCreateOrConnectWithoutShortUrlKeyInput, {nullable:true})
    @Type(() => ShortUrlCreateOrConnectWithoutShortUrlKeyInput)
    connectOrCreate?: ShortUrlCreateOrConnectWithoutShortUrlKeyInput;

    @Field(() => ShortUrlUpsertWithoutShortUrlKeyInput, {nullable:true})
    @Type(() => ShortUrlUpsertWithoutShortUrlKeyInput)
    upsert?: ShortUrlUpsertWithoutShortUrlKeyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:true})
    @Type(() => ShortUrlWhereUniqueInput)
    connect?: ShortUrlWhereUniqueInput;

    @Field(() => ShortUrlUpdateWithoutShortUrlKeyInput, {nullable:true})
    @Type(() => ShortUrlUpdateWithoutShortUrlKeyInput)
    update?: ShortUrlUpdateWithoutShortUrlKeyInput;
}
