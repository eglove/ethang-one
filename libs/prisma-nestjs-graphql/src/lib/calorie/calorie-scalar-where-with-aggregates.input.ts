import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CalorieScalarWhereWithAggregatesInput {

    @Field(() => [CalorieScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CalorieScalarWhereWithAggregatesInput>;

    @Field(() => [CalorieScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CalorieScalarWhereWithAggregatesInput>;

    @Field(() => [CalorieScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CalorieScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currentCount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    dailyCalories?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deficit?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    personId?: StringWithAggregatesFilter;
}
