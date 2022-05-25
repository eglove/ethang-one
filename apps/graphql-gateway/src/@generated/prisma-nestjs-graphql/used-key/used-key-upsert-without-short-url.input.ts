import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyUpdateWithoutShortUrlInput } from './used-key-update-without-short-url.input';
import { Type } from 'class-transformer';
import { UsedKeyCreateWithoutShortUrlInput } from './used-key-create-without-short-url.input';

@InputType()
export class UsedKeyUpsertWithoutShortUrlInput {

    @Field(() => UsedKeyUpdateWithoutShortUrlInput, {nullable:false})
    @Type(() => UsedKeyUpdateWithoutShortUrlInput)
    update!: UsedKeyUpdateWithoutShortUrlInput;

    @Field(() => UsedKeyCreateWithoutShortUrlInput, {nullable:false})
    @Type(() => UsedKeyCreateWithoutShortUrlInput)
    create!: UsedKeyCreateWithoutShortUrlInput;
}
