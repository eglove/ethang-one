import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class HabitScalarWhereWithAggregatesInput {

    @Field(() => [HabitScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitScalarWhereWithAggregatesInput>;

    @Field(() => [HabitScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitScalarWhereWithAggregatesInput>;

    @Field(() => [HabitScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recurInterval?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeWithAggregatesFilter;
}
