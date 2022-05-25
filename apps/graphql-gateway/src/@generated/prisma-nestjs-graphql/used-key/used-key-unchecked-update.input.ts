import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput } from '../short-url/short-url-unchecked-update-one-without-short-url-key.input';

@InputType()
export class UsedKeyUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: StringFieldUpdateOperationsInput;

    @Field(() => ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput, {nullable:true})
    ShortUrl?: ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput;
}
