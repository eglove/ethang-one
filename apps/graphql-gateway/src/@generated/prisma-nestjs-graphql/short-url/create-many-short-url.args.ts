import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlCreateManyInput } from './short-url-create-many.input';

@ArgsType()
export class CreateManyShortUrlArgs {

    @Field(() => [ShortUrlCreateManyInput], {nullable:false})
    data!: Array<ShortUrlCreateManyInput>;
}
