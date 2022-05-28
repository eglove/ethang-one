import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FinanceRecord {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    accountName!: string;

    @Field(() => Float, {nullable:false})
    currentValue!: number;

    @Field(() => Int, {nullable:false})
    recordedDate!: number;
}