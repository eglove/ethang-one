import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class TodaysCaloriesWhereInput {

    @Field(() => [TodaysCaloriesWhereInput], {nullable:true})
    AND?: Array<TodaysCaloriesWhereInput>;

    @Field(() => [TodaysCaloriesWhereInput], {nullable:true})
    OR?: Array<TodaysCaloriesWhereInput>;

    @Field(() => [TodaysCaloriesWhereInput], {nullable:true})
    NOT?: Array<TodaysCaloriesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    birthday?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currentCalories?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    height?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    weight?: FloatFilter;
}
