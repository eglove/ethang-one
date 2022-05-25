import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';
import { ShortUrlCreateOrConnectWithoutShortUrlKeyInput } from './short-url-create-or-connect-without-short-url-key.input';
import { ShortUrlUpsertWithoutShortUrlKeyInput } from './short-url-upsert-without-short-url-key.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { ShortUrlUpdateWithoutShortUrlKeyInput } from './short-url-update-without-short-url-key.input';

@InputType()
export class ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput {

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:true})
    create?: ShortUrlCreateWithoutShortUrlKeyInput;

    @Field(() => ShortUrlCreateOrConnectWithoutShortUrlKeyInput, {nullable:true})
    connectOrCreate?: ShortUrlCreateOrConnectWithoutShortUrlKeyInput;

    @Field(() => ShortUrlUpsertWithoutShortUrlKeyInput, {nullable:true})
    upsert?: ShortUrlUpsertWithoutShortUrlKeyInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:true})
    connect?: ShortUrlWhereUniqueInput;

    @Field(() => ShortUrlUpdateWithoutShortUrlKeyInput, {nullable:true})
    update?: ShortUrlUpdateWithoutShortUrlKeyInput;
}
