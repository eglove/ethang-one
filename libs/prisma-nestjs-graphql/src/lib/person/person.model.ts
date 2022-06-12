import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { CalorieRecord } from '../calorie-record/calorie-record.model';
import { PersonCount } from './person-count.output';

@ObjectType()
export class Person {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    birthday!: Date;

    @Field(() => Float, {nullable:false})
    weightLbs!: number;

    @Field(() => Float, {nullable:false})
    heightIn!: number;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [CalorieRecord], {nullable:true})
    Calorie?: Array<CalorieRecord>;

    @Field(() => PersonCount, {nullable:false})
    _count?: PersonCount;
}
