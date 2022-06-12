import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieWhereInput } from './calorie-where.input';
import { Type } from 'class-transformer';
import { CalorieOrderByWithRelationInput } from './calorie-order-by-with-relation.input';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CalorieScalarFieldEnum } from './calorie-scalar-field.enum';

@ArgsType()
export class FindManyCalorieArgs {

    @Field(() => CalorieWhereInput, {nullable:true})
    @Type(() => CalorieWhereInput)
    where?: CalorieWhereInput;

    @Field(() => [CalorieOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CalorieOrderByWithRelationInput>;

    @Field(() => CalorieWhereUniqueInput, {nullable:true})
    cursor?: CalorieWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CalorieScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CalorieScalarFieldEnum>;
}
