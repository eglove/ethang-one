import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FinanceRecordAvgAggregate {

    @Field(() => Float, {nullable:true})
    currentValue?: number;
}
