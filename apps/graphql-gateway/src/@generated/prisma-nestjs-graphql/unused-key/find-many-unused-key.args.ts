import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereInput } from './unused-key-where.input';
import { Type } from 'class-transformer';
import { UnusedKeyOrderByWithRelationInput } from './unused-key-order-by-with-relation.input';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UnusedKeyScalarFieldEnum } from './unused-key-scalar-field.enum';

@ArgsType()
export class FindManyUnusedKeyArgs {

    @Field(() => UnusedKeyWhereInput, {nullable:true})
    @Type(() => UnusedKeyWhereInput)
    where?: UnusedKeyWhereInput;

    @Field(() => [UnusedKeyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UnusedKeyOrderByWithRelationInput>;

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:true})
    cursor?: UnusedKeyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UnusedKeyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UnusedKeyScalarFieldEnum>;
}
