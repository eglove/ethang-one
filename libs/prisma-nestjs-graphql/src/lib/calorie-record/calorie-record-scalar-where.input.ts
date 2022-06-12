import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class CalorieRecordScalarWhereInput {

    @Field(() => [CalorieRecordScalarWhereInput], {nullable:true})
    AND?: Array<CalorieRecordScalarWhereInput>;

    @Field(() => [CalorieRecordScalarWhereInput], {nullable:true})
    OR?: Array<CalorieRecordScalarWhereInput>;

    @Field(() => [CalorieRecordScalarWhereInput], {nullable:true})
    NOT?: Array<CalorieRecordScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    calories?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    leftForToday?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    personId?: StringFilter;
}
