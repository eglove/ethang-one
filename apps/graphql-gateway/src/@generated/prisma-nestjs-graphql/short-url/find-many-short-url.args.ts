import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShortUrlWhereInput } from './short-url-where.input';
import { ShortUrlOrderByWithRelationInput } from './short-url-order-by-with-relation.input';
import { ShortUrlWhereUniqueInput } from './short-url-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShortUrlScalarFieldEnum } from './short-url-scalar-field.enum';

@ArgsType()
export class FindManyShortUrlArgs {

    @Field(() => ShortUrlWhereInput, {nullable:true})
    where?: ShortUrlWhereInput;

    @Field(() => [ShortUrlOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShortUrlOrderByWithRelationInput>;

    @Field(() => ShortUrlWhereUniqueInput, {nullable:true})
    cursor?: ShortUrlWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShortUrlScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShortUrlScalarFieldEnum>;
}
