import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlUpdateManyMutationInput } from './short-url-update-many-mutation.input';
import { ShortUrlWhereInput } from './short-url-where.input';

@ArgsType()
export class UpdateManyShortUrlArgs {

    @Field(() => ShortUrlUpdateManyMutationInput, {nullable:false})
    data!: ShortUrlUpdateManyMutationInput;

    @Field(() => ShortUrlWhereInput, {nullable:true})
    where?: ShortUrlWhereInput;
}
