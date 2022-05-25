import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ShortUrlScalarWhereWithAggregatesInput {

    @Field(() => [ShortUrlScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShortUrlScalarWhereWithAggregatesInput>;

    @Field(() => [ShortUrlScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShortUrlScalarWhereWithAggregatesInput>;

    @Field(() => [ShortUrlScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShortUrlScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    originalUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    usedKeyId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expirationDate?: DateTimeWithAggregatesFilter;
}
