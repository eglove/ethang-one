import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PersonAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    weightLbs?: true;

    @Field(() => Boolean, {nullable:true})
    heightIn?: true;
}
