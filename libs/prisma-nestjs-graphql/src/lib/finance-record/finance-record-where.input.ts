import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class FinanceRecordWhereInput {

    @Field(() => [FinanceRecordWhereInput], {nullable:true})
    AND?: Array<FinanceRecordWhereInput>;

    @Field(() => [FinanceRecordWhereInput], {nullable:true})
    OR?: Array<FinanceRecordWhereInput>;

    @Field(() => [FinanceRecordWhereInput], {nullable:true})
    NOT?: Array<FinanceRecordWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    accountName?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    currentValue?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    recordedDate?: DateTimeFilter;
}
