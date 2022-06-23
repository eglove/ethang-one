import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkCreateManyUserInput } from './to-read-link-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ToReadLinkCreateManyUserInputEnvelope {

    @Field(() => [ToReadLinkCreateManyUserInput], {nullable:false})
    @Type(() => ToReadLinkCreateManyUserInput)
    data!: Array<ToReadLinkCreateManyUserInput>;
}
