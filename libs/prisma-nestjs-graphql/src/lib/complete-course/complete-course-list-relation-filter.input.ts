import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseWhereInput } from './complete-course-where.input';

@InputType()
export class CompleteCourseListRelationFilter {

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    every?: CompleteCourseWhereInput;

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    some?: CompleteCourseWhereInput;

    @Field(() => CompleteCourseWhereInput, {nullable:true})
    none?: CompleteCourseWhereInput;
}
