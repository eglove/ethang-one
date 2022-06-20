import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CompleteCourseScalarWhereInput {

    @Field(() => [CompleteCourseScalarWhereInput], {nullable:true})
    AND?: Array<CompleteCourseScalarWhereInput>;

    @Field(() => [CompleteCourseScalarWhereInput], {nullable:true})
    OR?: Array<CompleteCourseScalarWhereInput>;

    @Field(() => [CompleteCourseScalarWhereInput], {nullable:true})
    NOT?: Array<CompleteCourseScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
