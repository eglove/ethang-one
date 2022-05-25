import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';
import { ShortUrlCreateOrConnectWithoutShortUrlKeyInput } from './short-url-create-or-connect-without-short-url-key.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';

@InputType()
export class ShortUrlCreateNestedOneWithoutShortUrlKeyInput {

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:true})
    create?: ShortUrlCreateWithoutShortUrlKeyInput;

    @Field(() => ShortUrlCreateOrConnectWithoutShortUrlKeyInput, {nullable:true})
    connectOrCreate?: ShortUrlCreateOrConnectWithoutShortUrlKeyInput;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:true})
    connect?: ShortUrlWhereUniqueInput;
}
