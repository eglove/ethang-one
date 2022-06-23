import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ToReadLinkListRelationFilter } from '../to-read-link/to-read-link-list-relation-filter.input';
import { PersonRelationFilter } from '../person/person-relation-filter.input';
import { CompleteCourseListRelationFilter } from '../complete-course/complete-course-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => ToReadLinkListRelationFilter, {nullable:true})
    toReadLinks?: ToReadLinkListRelationFilter;

    @Field(() => PersonRelationFilter, {nullable:true})
    Person?: PersonRelationFilter;

    @Field(() => CompleteCourseListRelationFilter, {nullable:true})
    CompleteCourse?: CompleteCourseListRelationFilter;
}
