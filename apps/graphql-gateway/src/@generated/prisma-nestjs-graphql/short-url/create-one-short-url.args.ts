import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlCreateInput } from './short-url-create.input';

@ArgsType()
export class CreateOneShortUrlArgs {

    @Field(() => ShortUrlCreateInput, {nullable:false})
    data!: ShortUrlCreateInput;
}
