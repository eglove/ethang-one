import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class FinanceRecordCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    accountName!: string;

    @Field(() => Float, {nullable:false})
    currentValue!: number;

    @Field(() => Date, {nullable:false})
    recordedDate!: Date | string;
}
