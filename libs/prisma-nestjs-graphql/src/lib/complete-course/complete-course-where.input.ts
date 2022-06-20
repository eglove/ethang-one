import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class CompleteCourseWhereInput {

    @Field(() => [CompleteCourseWhereInput], {nullable:true})
    AND?: Array<CompleteCourseWhereInput>;

    @Field(() => [CompleteCourseWhereInput], {nullable:true})
    OR?: Array<CompleteCourseWhereInput>;

    @Field(() => [CompleteCourseWhereInput], {nullable:true})
    NOT?: Array<CompleteCourseWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
