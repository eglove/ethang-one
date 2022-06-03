import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class TodaysCaloriesScalarWhereWithAggregatesInput {

    @Field(() => [TodaysCaloriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TodaysCaloriesScalarWhereWithAggregatesInput>;

    @Field(() => [TodaysCaloriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TodaysCaloriesScalarWhereWithAggregatesInput>;

    @Field(() => [TodaysCaloriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TodaysCaloriesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    birthday?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currentCalories?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    height?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    weight?: FloatWithAggregatesFilter;
}
