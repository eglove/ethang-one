import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PersonRelationFilter } from '../person/person-relation-filter.input';

@InputType()
export class CalorieWhereInput {

    @Field(() => [CalorieWhereInput], {nullable:true})
    AND?: Array<CalorieWhereInput>;

    @Field(() => [CalorieWhereInput], {nullable:true})
    OR?: Array<CalorieWhereInput>;

    @Field(() => [CalorieWhereInput], {nullable:true})
    NOT?: Array<CalorieWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    currentCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    dailyCalories?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deficit?: IntFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    Person?: PersonRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    personId?: StringFilter;
}
