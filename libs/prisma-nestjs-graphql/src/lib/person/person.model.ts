import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Calorie } from '../calorie/calorie.model';

@ObjectType()
export class Person {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => Calorie, {nullable:true})
    Calorie?: Calorie | null;
}
