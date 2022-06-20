import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CompleteCourseCountAggregate } from './complete-course-count-aggregate.output';
import { CompleteCourseMinAggregate } from './complete-course-min-aggregate.output';
import { CompleteCourseMaxAggregate } from './complete-course-max-aggregate.output';

@ObjectType()
export class AggregateCompleteCourse {

    @Field(() => CompleteCourseCountAggregate, {nullable:true})
    _count?: CompleteCourseCountAggregate;

    @Field(() => CompleteCourseMinAggregate, {nullable:true})
    _min?: CompleteCourseMinAggregate;

    @Field(() => CompleteCourseMaxAggregate, {nullable:true})
    _max?: CompleteCourseMaxAggregate;
}
