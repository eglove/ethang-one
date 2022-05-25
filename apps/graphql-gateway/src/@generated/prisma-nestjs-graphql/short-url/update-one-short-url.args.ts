import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlUpdateInput } from './short-url-update.input';
import { Type } from 'class-transformer';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';

@ArgsType()
export class UpdateOneShortUrlArgs {

    @Field(() => ShortUrlUpdateInput, {nullable:false})
    @Type(() => ShortUrlUpdateInput)
    data!: ShortUrlUpdateInput;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    @Type(() => ShortUrlWhereUniqueInput)
    where!: ShortUrlWhereUniqueInput;
}
