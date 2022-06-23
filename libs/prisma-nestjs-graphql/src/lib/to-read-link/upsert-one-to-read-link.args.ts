import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Type } from 'class-transformer';
import { ToReadLinkCreateInput } from './to-read-link-create.input';
import { ToReadLinkUpdateInput } from './to-read-link-update.input';

@ArgsType()
export class UpsertOneToReadLinkArgs {

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:false})
    @Type(() => ToReadLinkWhereUniqueInput)
    where!: ToReadLinkWhereUniqueInput;

    @Field(() => ToReadLinkCreateInput, {nullable:false})
    @Type(() => ToReadLinkCreateInput)
    create!: ToReadLinkCreateInput;

    @Field(() => ToReadLinkUpdateInput, {nullable:false})
    @Type(() => ToReadLinkUpdateInput)
    update!: ToReadLinkUpdateInput;
}
