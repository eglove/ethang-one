import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseCreateWithoutUserInput } from './complete-course-create-without-user.input';
import { Type } from 'class-transformer';
import { CompleteCourseCreateOrConnectWithoutUserInput } from './complete-course-create-or-connect-without-user.input';
import { CompleteCourseUpsertWithWhereUniqueWithoutUserInput } from './complete-course-upsert-with-where-unique-without-user.input';
import { CompleteCourseCreateManyUserInputEnvelope } from './complete-course-create-many-user-input-envelope.input';
import { CompleteCourseWhereUniqueInput } from './complete-course-where-unique.input';
import { CompleteCourseUpdateWithWhereUniqueWithoutUserInput } from './complete-course-update-with-where-unique-without-user.input';
import { CompleteCourseUpdateManyWithWhereWithoutUserInput } from './complete-course-update-many-with-where-without-user.input';
import { CompleteCourseScalarWhereInput } from './complete-course-scalar-where.input';

@InputType()
export class CompleteCourseUpdateManyWithoutUserNestedInput {

    @Field(() => [CompleteCourseCreateWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseCreateWithoutUserInput)
    create?: Array<CompleteCourseCreateWithoutUserInput>;

    @Field(() => [CompleteCourseCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CompleteCourseCreateOrConnectWithoutUserInput>;

    @Field(() => [CompleteCourseUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CompleteCourseUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CompleteCourseCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CompleteCourseCreateManyUserInputEnvelope)
    createMany?: CompleteCourseCreateManyUserInputEnvelope;

    @Field(() => [CompleteCourseWhereUniqueInput], {nullable:true})
    @Type(() => CompleteCourseWhereUniqueInput)
    set?: Array<CompleteCourseWhereUniqueInput>;

    @Field(() => [CompleteCourseWhereUniqueInput], {nullable:true})
    @Type(() => CompleteCourseWhereUniqueInput)
    disconnect?: Array<CompleteCourseWhereUniqueInput>;

    @Field(() => [CompleteCourseWhereUniqueInput], {nullable:true})
    @Type(() => CompleteCourseWhereUniqueInput)
    delete?: Array<CompleteCourseWhereUniqueInput>;

    @Field(() => [CompleteCourseWhereUniqueInput], {nullable:true})
    @Type(() => CompleteCourseWhereUniqueInput)
    connect?: Array<CompleteCourseWhereUniqueInput>;

    @Field(() => [CompleteCourseUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CompleteCourseUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CompleteCourseUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CompleteCourseUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CompleteCourseUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CompleteCourseScalarWhereInput], {nullable:true})
    @Type(() => CompleteCourseScalarWhereInput)
    deleteMany?: Array<CompleteCourseScalarWhereInput>;
}
