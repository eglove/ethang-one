import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereInput } from './short-url-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyShortUrlArgs {

    @Field(() => ShortUrlWhereInput, {nullable:true})
    @Type(() => ShortUrlWhereInput)
    where?: ShortUrlWhereInput;
}
