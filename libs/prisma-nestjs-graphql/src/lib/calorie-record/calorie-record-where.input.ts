import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { PersonRelationFilter } from '../person/person-relation-filter.input';

@InputType()
export class CalorieRecordWhereInput {

    @Field(() => [CalorieRecordWhereInput], {nullable:true})
    AND?: Array<CalorieRecordWhereInput>;

    @Field(() => [CalorieRecordWhereInput], {nullable:true})
    OR?: Array<CalorieRecordWhereInput>;

    @Field(() => [CalorieRecordWhereInput], {nullable:true})
    NOT?: Array<CalorieRecordWhereInput>;

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

    @Field(() => PersonRelationFilter, {nullable:true})
    Person?: PersonRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    personId?: StringFilter;
}
