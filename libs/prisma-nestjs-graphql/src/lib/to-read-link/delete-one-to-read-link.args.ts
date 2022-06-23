import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneToReadLinkArgs {

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:false})
    @Type(() => ToReadLinkWhereUniqueInput)
    where!: ToReadLinkWhereUniqueInput;
}
