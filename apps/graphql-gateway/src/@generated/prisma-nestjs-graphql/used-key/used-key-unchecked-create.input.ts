import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShortUrlUncheckedCreateNestedOneWithoutShortUrlKeyInput } from '../short-url/short-url-unchecked-create-nested-one-without-short-url-key.input';

@InputType()
export class UsedKeyUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => ShortUrlUncheckedCreateNestedOneWithoutShortUrlKeyInput, {nullable:true})
    ShortUrl?: ShortUrlUncheckedCreateNestedOneWithoutShortUrlKeyInput;
}
