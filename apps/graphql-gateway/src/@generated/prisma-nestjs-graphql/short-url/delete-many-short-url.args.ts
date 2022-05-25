import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereInput } from './short-url-where.input';

@ArgsType()
export class DeleteManyShortUrlArgs {

    @Field(() => ShortUrlWhereInput, {nullable:true})
    where?: ShortUrlWhereInput;
}
