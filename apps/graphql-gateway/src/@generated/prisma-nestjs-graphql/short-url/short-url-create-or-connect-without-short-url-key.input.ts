import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { Type } from 'class-transformer';
import { ShortUrlCreateWithoutShortUrlKeyInput } from './short-url-create-without-short-url-key.input';

@InputType()
export class ShortUrlCreateOrConnectWithoutShortUrlKeyInput {

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    @Type(() => ShortUrlWhereUniqueInput)
    where!: ShortUrlWhereUniqueInput;

    @Field(() => ShortUrlCreateWithoutShortUrlKeyInput, {nullable:false})
    @Type(() => ShortUrlCreateWithoutShortUrlKeyInput)
    create!: ShortUrlCreateWithoutShortUrlKeyInput;
}
