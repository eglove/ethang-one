import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkUpdateInput } from './to-read-link-update.input';
import { Type } from 'class-transformer';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';

@ArgsType()
export class UpdateOneToReadLinkArgs {

    @Field(() => ToReadLinkUpdateInput, {nullable:false})
    @Type(() => ToReadLinkUpdateInput)
    data!: ToReadLinkUpdateInput;

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:false})
    @Type(() => ToReadLinkWhereUniqueInput)
    where!: ToReadLinkWhereUniqueInput;
}
