import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';

@ArgsType()
export class DeleteOneShortUrlArgs {

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    where!: ShortUrlWhereUniqueInput;
}
