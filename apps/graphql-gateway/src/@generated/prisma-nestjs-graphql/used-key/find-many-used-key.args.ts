import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereInput } from './used-key-where.input';
import { Type } from 'class-transformer';
import { UsedKeyOrderByWithRelationInput } from './used-key-order-by-with-relation.input';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsedKeyScalarFieldEnum } from './used-key-scalar-field.enum';

@ArgsType()
export class FindManyUsedKeyArgs {

    @Field(() => UsedKeyWhereInput, {nullable:true})
    @Type(() => UsedKeyWhereInput)
    where?: UsedKeyWhereInput;

    @Field(() => [UsedKeyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsedKeyOrderByWithRelationInput>;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:true})
    cursor?: UsedKeyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsedKeyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsedKeyScalarFieldEnum>;
}
