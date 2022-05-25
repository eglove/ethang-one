import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';

@InputType()
export class ShortUrlCreateOrConnectWithoutShortUrlKeyInput {

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    where!: ShortUrlWhereUniqueInput;

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:false})
    create!: ShortUrlCreateWithoutShortUrlKeyInput;
}
