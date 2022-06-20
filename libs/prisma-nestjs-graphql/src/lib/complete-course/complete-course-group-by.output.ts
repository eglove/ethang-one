import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CompleteCourseCountAggregate } from './complete-course-count-aggregate.output';
import { CompleteCourseMinAggregate } from './complete-course-min-aggregate.output';
import { CompleteCourseMaxAggregate } from './complete-course-max-aggregate.output';

@ObjectType()
export class CompleteCourseGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CompleteCourseCountAggregate, {nullable:true})
    _count?: CompleteCourseCountAggregate;

    @Field(() => CompleteCourseMinAggregate, {nullable:true})
    _min?: CompleteCourseMinAggregate;

    @Field(() => CompleteCourseMaxAggregate, {nullable:true})
    _max?: CompleteCourseMaxAggregate;
}
