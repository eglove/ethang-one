import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShortUrlCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    originalUrl!: string;

    @Field(() => String, {nullable:false})
    usedKeyId!: string;

    @Field(() => Date, {nullable:false})
    expirationDate!: Date | string;
}
