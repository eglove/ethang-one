import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlCreateNestedOneWithoutShortUrlKeyInput } from '../short-url/short-url-create-nested-one-without-short-url-key.input';

@InputType()
export class UsedKeyCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => ShortUrlCreateNestedOneWithoutShortUrlKeyInput, {nullable:true})
    ShortUrl?: ShortUrlCreateNestedOneWithoutShortUrlKeyInput;
}
