import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkCreateManyInput } from './to-read-link-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyToReadLinkArgs {

    @Field(() => [ToReadLinkCreateManyInput], {nullable:false})
    @Type(() => ToReadLinkCreateManyInput)
    data!: Array<ToReadLinkCreateManyInput>;
}
