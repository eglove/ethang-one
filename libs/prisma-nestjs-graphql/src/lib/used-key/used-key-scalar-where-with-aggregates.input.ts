import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

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

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    key?: StringWithAggregatesFilter;
}
