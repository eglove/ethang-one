import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlCreateInput } from './short-url-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneShortUrlArgs {

    @Field(() => ShortUrlCreateInput, {nullable:false})
    @Type(() => ShortUrlCreateInput)
    data!: ShortUrlCreateInput;
}
