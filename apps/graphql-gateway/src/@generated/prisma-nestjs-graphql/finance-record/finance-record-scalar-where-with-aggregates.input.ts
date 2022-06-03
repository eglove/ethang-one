import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FinanceRecordScalarWhereWithAggregatesInput {

    @Field(() => [FinanceRecordScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FinanceRecordScalarWhereWithAggregatesInput>;

    @Field(() => [FinanceRecordScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FinanceRecordScalarWhereWithAggregatesInput>;

    @Field(() => [FinanceRecordScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FinanceRecordScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accountName?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    currentValue?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    recordedDate?: DateTimeWithAggregatesFilter;
}
