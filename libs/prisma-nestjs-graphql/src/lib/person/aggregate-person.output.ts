import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PersonCountAggregate } from './person-count-aggregate.output';
import { PersonAvgAggregate } from './person-avg-aggregate.output';
import { PersonSumAggregate } from './person-sum-aggregate.output';
import { PersonMinAggregate } from './person-min-aggregate.output';
import { PersonMaxAggregate } from './person-max-aggregate.output';

@ObjectType()
export class AggregatePerson {

    @Field(() => PersonCountAggregate, {nullable:true})
    _count?: PersonCountAggregate;

    @Field(() => PersonAvgAggregate, {nullable:true})
    _avg?: PersonAvgAggregate;

    @Field(() => PersonSumAggregate, {nullable:true})
    _sum?: PersonSumAggregate;

    @Field(() => PersonMinAggregate, {nullable:true})
    _min?: PersonMinAggregate;

    @Field(() => PersonMaxAggregate, {nullable:true})
    _max?: PersonMaxAggregate;
}
