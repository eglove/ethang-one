import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlUpdateInput } from './short-url-update.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';

@ArgsType()
export class UpdateOneShortUrlArgs {

    @Field(() => ShortUrlUpdateInput, {nullable:false})
    data!: ShortUrlUpdateInput;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    where!: ShortUrlWhereUniqueInput;
}
