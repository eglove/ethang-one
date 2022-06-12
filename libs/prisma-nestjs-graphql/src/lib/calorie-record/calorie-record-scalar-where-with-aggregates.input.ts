import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class CalorieRecordScalarWhereWithAggregatesInput {

    @Field(() => [CalorieRecordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CalorieRecordScalarWhereWithAggregatesInput>;

    @Field(() => [CalorieRecordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CalorieRecordScalarWhereWithAggregatesInput>;

    @Field(() => [CalorieRecordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CalorieRecordScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    calories?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    leftForToday?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    personId?: StringWithAggregatesFilter;
}
