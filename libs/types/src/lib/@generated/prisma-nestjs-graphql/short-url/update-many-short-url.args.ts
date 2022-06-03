import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlUpdateManyMutationInput } from './short-url-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ShortUrlWhereInput } from './short-url-where.input';

@ArgsType()
export class UpdateManyShortUrlArgs {

    @Field(() => ShortUrlUpdateManyMutationInput, {nullable:false})
    @Type(() => ShortUrlUpdateManyMutationInput)
    data!: ShortUrlUpdateManyMutationInput;

    @Field(() => ShortUrlWhereInput, {nullable:true})
    @Type(() => ShortUrlWhereInput)
    where?: ShortUrlWhereInput;
}
