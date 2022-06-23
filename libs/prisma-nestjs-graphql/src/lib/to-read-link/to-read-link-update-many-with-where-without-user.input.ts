import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkScalarWhereInput } from './to-read-link-scalar-where.input';
import { Type } from 'class-transformer';
import { ToReadLinkUpdateManyMutationInput } from './to-read-link-update-many-mutation.input';

@InputType()
export class ToReadLinkUpdateManyWithWhereWithoutUserInput {

    @Field(() => ToReadLinkScalarWhereInput, {nullable:false})
    @Type(() => ToReadLinkScalarWhereInput)
    where!: ToReadLinkScalarWhereInput;

    @Field(() => ToReadLinkUpdateManyMutationInput, {nullable:false})
    @Type(() => ToReadLinkUpdateManyMutationInput)
    data!: ToReadLinkUpdateManyMutationInput;
}
