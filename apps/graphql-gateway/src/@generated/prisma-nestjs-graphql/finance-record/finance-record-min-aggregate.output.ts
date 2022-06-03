import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FinanceRecordMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    accountName?: string;

    @Field(() => Float, {nullable:true})
    currentValue?: number;

    @Field(() => Date, {nullable:true})
    recordedDate?: Date | string;
}
