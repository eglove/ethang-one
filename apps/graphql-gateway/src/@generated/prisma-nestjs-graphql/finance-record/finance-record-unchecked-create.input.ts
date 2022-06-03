import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class FinanceRecordUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    accountName!: string;

    @Field(() => Float, {nullable:false})
    currentValue!: number;

    @Field(() => Date, {nullable:false})
    recordedDate!: Date | string;
}
