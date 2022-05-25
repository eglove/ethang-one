import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlCreateManyInput } from './short-url-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyShortUrlArgs {

    @Field(() => [ShortUrlCreateManyInput], {nullable:false})
    @Type(() => ShortUrlCreateManyInput)
    data!: Array<ShortUrlCreateManyInput>;
}
