import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkCreateInput } from './to-read-link-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneToReadLinkArgs {

    @Field(() => ToReadLinkCreateInput, {nullable:false})
    @Type(() => ToReadLinkCreateInput)
    data!: ToReadLinkCreateInput;
}
