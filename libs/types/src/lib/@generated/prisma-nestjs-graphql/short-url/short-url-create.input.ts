import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsedKeyCreateNestedOneWithoutShortUrlInput } from '../used-key/used-key-create-nested-one-without-short-url.input';

@InputType()
export class ShortUrlCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    originalUrl!: string;

    @Field(() => Date, {nullable:false})
    expirationDate!: Date | string;

    @Field(() => UsedKeyCreateNestedOneWithoutShortUrlInput, {nullable:false})
    shortUrlKey!: UsedKeyCreateNestedOneWithoutShortUrlInput;
}
