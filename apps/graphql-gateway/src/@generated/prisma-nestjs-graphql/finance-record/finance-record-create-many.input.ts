import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FinanceRecordCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    accountName!: string;

    @Field(() => Float, {nullable:false})
    currentValue!: number;

    @Field(() => Int, {nullable:false})
    recordedDate!: number;
}
