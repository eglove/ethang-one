import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class HabitWhereInput {

    @Field(() => [HabitWhereInput], {nullable:true})
    AND?: Array<HabitWhereInput>;

    @Field(() => [HabitWhereInput], {nullable:true})
    OR?: Array<HabitWhereInput>;

    @Field(() => [HabitWhereInput], {nullable:true})
    NOT?: Array<HabitWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recurInterval?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    dueDate?: IntFilter;
}
