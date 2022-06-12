import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordWhereInput } from './calorie-record-where.input';
import { Type } from 'class-transformer';
import { CalorieRecordOrderByWithRelationInput } from './calorie-record-order-by-with-relation.input';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CalorieRecordScalarFieldEnum } from './calorie-record-scalar-field.enum';

@ArgsType()
export class FindManyCalorieRecordArgs {

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    @Type(() => CalorieRecordWhereInput)
    where?: CalorieRecordWhereInput;

    @Field(() => [CalorieRecordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CalorieRecordOrderByWithRelationInput>;

    @Field(() => CalorieRecordWhereUniqueInput, {nullable:true})
    cursor?: CalorieRecordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CalorieRecordScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CalorieRecordScalarFieldEnum>;
}
