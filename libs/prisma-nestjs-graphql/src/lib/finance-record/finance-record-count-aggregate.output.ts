import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FinanceRecordCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    accountName!: number;

    @Field(() => Int, {nullable:false})
    currentValue!: number;

    @Field(() => Int, {nullable:false})
    recordedDate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
