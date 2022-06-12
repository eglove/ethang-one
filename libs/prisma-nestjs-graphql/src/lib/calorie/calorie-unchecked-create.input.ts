import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class CalorieUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    currentCount?: number;

    @Field(() => Int, {nullable:true})
    dailyCalories?: number;

    @Field(() => Int, {nullable:true})
    deficit?: number;

    @Field(() => String, {nullable:false})
    personId!: string;
}
