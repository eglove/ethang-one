import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsedKeyRelationFilter } from '../used-key/used-key-relation-filter.input';

@InputType()
export class ShortUrlWhereInput {

    @Field(() => [ShortUrlWhereInput], {nullable:true})
    AND?: Array<ShortUrlWhereInput>;

    @Field(() => [ShortUrlWhereInput], {nullable:true})
    OR?: Array<ShortUrlWhereInput>;

    @Field(() => [ShortUrlWhereInput], {nullable:true})
    NOT?: Array<ShortUrlWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    originalUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    usedKeyId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expirationDate?: DateTimeFilter;

    @Field(() => UsedKeyRelationFilter, {nullable:true})
    shortUrlKey?: UsedKeyRelationFilter;
}
