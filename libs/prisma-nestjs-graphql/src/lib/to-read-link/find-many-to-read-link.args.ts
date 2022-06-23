import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToReadLinkWhereInput } from './to-read-link-where.input';
import { Type } from 'class-transformer';
import { ToReadLinkOrderByWithRelationInput } from './to-read-link-order-by-with-relation.input';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ToReadLinkScalarFieldEnum } from './to-read-link-scalar-field.enum';

@ArgsType()
export class FindManyToReadLinkArgs {

    @Field(() => ToReadLinkWhereInput, {nullable:true})
    @Type(() => ToReadLinkWhereInput)
    where?: ToReadLinkWhereInput;

    @Field(() => [ToReadLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ToReadLinkOrderByWithRelationInput>;

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:true})
    cursor?: ToReadLinkWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ToReadLinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ToReadLinkScalarFieldEnum>;
}
