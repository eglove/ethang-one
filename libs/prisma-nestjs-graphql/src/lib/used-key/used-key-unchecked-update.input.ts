import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput } from '../short-url/short-url-unchecked-update-one-without-short-url-key.input';

@InputType()
export class UsedKeyUncheckedUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    key?: StringFieldUpdateOperationsInput;

    @Field(() => ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput, {nullable:true})
    ShortUrl?: ShortUrlUncheckedUpdateOneWithoutShortUrlKeyInput;
}
