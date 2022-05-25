import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlUpdateWithoutShortUrlKeyInput } from './short-url-update-without-short-url-key.input';
import { Type } from 'class-transformer';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';

@InputType()
export class ShortUrlUpsertWithoutShortUrlKeyInput {

    @Field(() => ShortUrlUpdateWithoutShortUrlKeyInput, {nullable:false})
    @Type(() => ShortUrlUpdateWithoutShortUrlKeyInput)
    update!: ShortUrlUpdateWithoutShortUrlKeyInput;

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:false})
    @Type(() => ShortUrlCreateWithoutShortUrlKeyInput)
    create!: ShortUrlCreateWithoutShortUrlKeyInput;
}
