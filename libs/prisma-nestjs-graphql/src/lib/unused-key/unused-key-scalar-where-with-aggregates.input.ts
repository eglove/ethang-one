import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UnusedKeyScalarWhereWithAggregatesInput {

    @Field(() => [UnusedKeyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UnusedKeyScalarWhereWithAggregatesInput>;

    @Field(() => [UnusedKeyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UnusedKeyScalarWhereWithAggregatesInput>;

    @Field(() => [UnusedKeyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UnusedKeyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;
}
