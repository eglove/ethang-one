import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueShortUrlArgs {

    @Field(() => ShortUrlWhereUniqueInput, {nullable:false})
    @Type(() => ShortUrlWhereUniqueInput)
    where!: ShortUrlWhereUniqueInput;
}
