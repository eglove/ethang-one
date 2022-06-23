import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkWhereInput } from './to-read-link-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyToReadLinkArgs {

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    @Type(() => ToReadLinkWhereInput)
    where?: ToReadLinkWhereInput;
}
