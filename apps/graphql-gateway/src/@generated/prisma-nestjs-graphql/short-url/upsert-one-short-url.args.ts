import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { Type } from 'class-transformer';
import { ShortUrlCreateInput } from './short-url-create.input';
import { ShortUrlUpdateInput } from './short-url-update.input';

@ArgsType()
export class UpsertOneShortUrlArgs {

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    @Type(() => ShortUrlWhereUniqueInput)
    where!: ShortUrlWhereUniqueInput;

    @Field(() => ShortUrlCreateInput, {nullable:false})
    @Type(() => ShortUrlCreateInput)
    create!: ShortUrlCreateInput;

    @Field(() => ShortUrlUpdateInput, {nullable:false})
    @Type(() => ShortUrlUpdateInput)
    update!: ShortUrlUpdateInput;
}
