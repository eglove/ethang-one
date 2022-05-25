import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsedKeyUpdateOneRequiredWithoutShortUrlInput } from '../used-key/used-key-update-one-required-without-short-url.input';

@InputType()
export class ShortUrlUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    originalUrl?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expirationDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsedKeyUpdateOneRequiredWithoutShortUrlInput, {nullable:true})
    shortUrlKey?: UsedKeyUpdateOneRequiredWithoutShortUrlInput;
}
