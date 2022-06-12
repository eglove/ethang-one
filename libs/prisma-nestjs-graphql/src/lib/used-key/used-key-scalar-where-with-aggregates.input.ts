import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UsedKeyScalarWhereWithAggregatesInput {

    @Field(() => [UsedKeyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UsedKeyScalarWhereWithAggregatesInput>;

    @Field(() => [UsedKeyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UsedKeyScalarWhereWithAggregatesInput>;

    @Field(() => [UsedKeyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UsedKeyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;
}
