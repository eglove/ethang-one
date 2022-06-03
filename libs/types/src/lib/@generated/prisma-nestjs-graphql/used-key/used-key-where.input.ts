import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ShortUrlRelationFilter } from '../short-url/short-url-relation-filter.input';

@InputType()
export class UsedKeyWhereInput {

    @Field(() => [UsedKeyWhereInput], {nullable:true})
    AND?: Array<UsedKeyWhereInput>;

    @Field(() => [UsedKeyWhereInput], {nullable:true})
    OR?: Array<UsedKeyWhereInput>;

    @Field(() => [UsedKeyWhereInput], {nullable:true})
    NOT?: Array<UsedKeyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => ShortUrlRelationFilter, {nullable:true})
    ShortUrl?: ShortUrlRelationFilter;
}
