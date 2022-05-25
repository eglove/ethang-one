import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { ShortUrlCreateInput } from './short-url-create.input';
import { ShortUrlUpdateInput } from './short-url-update.input';

@ArgsType()
export class UpsertOneShortUrlArgs {

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    where!: ShortUrlWhereUniqueInput;

    @Field(() => ShortUrlCreateInput, {nullable:false})
    create!: ShortUrlCreateInput;

    @Field(() => ShortUrlUpdateInput, {nullable:false})
    update!: ShortUrlUpdateInput;
}
