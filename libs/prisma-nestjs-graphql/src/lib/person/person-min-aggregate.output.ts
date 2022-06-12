import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PersonMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => Float, {nullable:true})
    weightLbs?: number;

    @Field(() => Float, {nullable:true})
    heightIn?: number;

    @Field(() => String, {nullable:true})
    userId?: string;
}
