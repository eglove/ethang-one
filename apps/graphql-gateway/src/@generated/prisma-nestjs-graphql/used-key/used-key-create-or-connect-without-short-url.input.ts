import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { Type } from 'class-transformer';
import { UsedKeyCreateWithoutShortUrlInput } from './used-key-create-without-short-url.input';

@InputType()
export class UsedKeyCreateOrConnectWithoutShortUrlInput {

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UsedKeyWhereUniqueInput)
    where!: UsedKeyWhereUniqueInput;

    @Field(() => UsedKeyCreateWithoutShortUrlInput, {nullable:false})
    @Type(() => UsedKeyCreateWithoutShortUrlInput)
    create!: UsedKeyCreateWithoutShortUrlInput;
}
