import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlUpdateWithoutShortUrlKeyInput } from './short-url-update-without-short-url-key.input';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';

@InputType()
export class ShortUrlUpsertWithoutShortUrlKeyInput {

    @Field(() => ShortUrlUpdateWithoutShortUrlKeyInput, {nullable:false})
    update!: ShortUrlUpdateWithoutShortUrlKeyInput;

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:false})
    create!: ShortUrlCreateWithoutShortUrlKeyInput;
}
