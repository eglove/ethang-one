import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ShortUrlUpdateOneWithoutShortUrlKeyInput } from '../short-url/short-url-update-one-without-short-url-key.input';

@InputType()
export class UsedKeyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: StringFieldUpdateOperationsInput;

    @Field(() => ShortUrlUpdateOneWithoutShortUrlKeyInput, {nullable:true})
    ShortUrl?: ShortUrlUpdateOneWithoutShortUrlKeyInput;
}
