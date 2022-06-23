import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkUpdateManyMutationInput } from './to-read-link-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ToReadLinkWhereInput } from './to-read-link-where.input';

@ArgsType()
export class UpdateManyToReadLinkArgs {

    @Field(() => ToReadLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => ToReadLinkUpdateManyMutationInput)
    data!: ToReadLinkUpdateManyMutationInput;

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    @Type(() => ToReadLinkWhereInput)
    where?: ToReadLinkWhereInput;
}
