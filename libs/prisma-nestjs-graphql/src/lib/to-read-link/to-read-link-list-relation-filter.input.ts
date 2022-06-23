import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkWhereInput } from './to-read-link-where.input';

@InputType()
export class ToReadLinkListRelationFilter {

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    every?: ToReadLinkWhereInput;

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    some?: ToReadLinkWhereInput;

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    none?: ToReadLinkWhereInput;
}
