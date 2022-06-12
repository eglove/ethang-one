import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PersonMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    birthday?: true;

    @Field(() => Boolean, {nullable:true})
    weightLbs?: true;

    @Field(() => Boolean, {nullable:true})
    heightIn?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
