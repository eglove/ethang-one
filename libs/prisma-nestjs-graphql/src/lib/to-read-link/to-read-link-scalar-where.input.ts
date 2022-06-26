import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ToReadLinkScalarWhereInput {

    @Field(() => [ToReadLinkScalarWhereInput], {nullable:true})
    AND?: Array<ToReadLinkScalarWhereInput>;

    @Field(() => [ToReadLinkScalarWhereInput], {nullable:true})
    OR?: Array<ToReadLinkScalarWhereInput>;

    @Field(() => [ToReadLinkScalarWhereInput], {nullable:true})
    NOT?: Array<ToReadLinkScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
