import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortUrlUncheckedCreateWithoutShortUrlKeyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    originalUrl!: string;

    @Field(() => Date, {nullable:false})
    expirationDate!: Date | string;
}
