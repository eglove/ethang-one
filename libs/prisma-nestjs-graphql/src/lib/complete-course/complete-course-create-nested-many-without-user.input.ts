import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseCreateWithoutUserInput } from './complete-course-create-without-user.input';
import { Type } from 'class-transformer';
import { CompleteCourseCreateOrConnectWithoutUserInput } from './complete-course-create-or-connect-without-user.input';
import { CompleteCourseCreateManyUserInputEnvelope } from './complete-course-create-many-user-input-envelope.input';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';

@InputType()
export class CompleteCourseCreateNestedManyWithoutUserInput {

    @Field(() => [CompleteCourseCreateWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseCreateWithoutUserInput)
    create?: Array<CompleteCourseCreateWithoutUserInput>;

    @Field(() => [CompleteCourseCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CompleteCourseCreateOrConnectWithoutUserInput>;

    @Field(() => CompleteCourseCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CompleteCourseCreateManyUserInputEnvelope)
    createMany?: CompleteCourseCreateManyUserInputEnvelope;

    @Field(() => [CompleteCourseWhereUniqueInput], {nullable:true})
    @Type(() => CompleteCourseWhereUniqueInput)
    connect?: Array<CompleteCourseWhereUniqueInput>;
}
