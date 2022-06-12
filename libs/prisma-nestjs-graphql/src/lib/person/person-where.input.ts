import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CalorieRelationFilter } from '../calorie/calorie-relation-filter.input';

@InputType()
export class PersonWhereInput {

    @Field(() => [PersonWhereInput], {nullable:true})
    AND?: Array<PersonWhereInput>;

    @Field(() => [PersonWhereInput], {nullable:true})
    OR?: Array<PersonWhereInput>;

    @Field(() => [PersonWhereInput], {nullable:true})
    NOT?: Array<PersonWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    birthday?: DateTimeFilter;

    @Field(() => FloatFilter, {nullable:true})
    weightLbs?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    heightIn?: FloatFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => CalorieRelationFilter, {nullable:true})
    Calorie?: CalorieRelationFilter;
}
