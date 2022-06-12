import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UnusedKeyWhereInput {

    @Field(() => [UnusedKeyWhereInput], {nullable:true})
    AND?: Array<UnusedKeyWhereInput>;

    @Field(() => [UnusedKeyWhereInput], {nullable:true})
    OR?: Array<UnusedKeyWhereInput>;

    @Field(() => [UnusedKeyWhereInput], {nullable:true})
    NOT?: Array<UnusedKeyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;
}
