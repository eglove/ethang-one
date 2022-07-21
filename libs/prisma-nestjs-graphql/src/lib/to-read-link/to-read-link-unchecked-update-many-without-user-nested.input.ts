import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkCreateWithoutUserInput } from './to-read-link-create-without-user.input';
import { Type } from 'class-transformer';
import { ToReadLinkCreateOrConnectWithoutUserInput } from './to-read-link-create-or-connect-without-user.input';
import { ToReadLinkUpsertWithWhereUniqueWithoutUserInput } from './to-read-link-upsert-with-where-unique-without-user.input';
import { ToReadLinkCreateManyUserInputEnvelope } from './to-read-link-create-many-user-input-envelope.input';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { ToReadLinkUpdateWithWhereUniqueWithoutUserInput } from './to-read-link-update-with-where-unique-without-user.input';
import { ToReadLinkUpdateManyWithWhereWithoutUserInput } from './to-read-link-update-many-with-where-without-user.input';
import { ToReadLinkScalarWhereInput } from './to-read-link-scalar-where.input';

@InputType()
export class ToReadLinkUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ToReadLinkCreateWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkCreateWithoutUserInput)
    create?: Array<ToReadLinkCreateWithoutUserInput>;

    @Field(() => [ToReadLinkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ToReadLinkCreateOrConnectWithoutUserInput>;

    @Field(() => [ToReadLinkUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ToReadLinkUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ToReadLinkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ToReadLinkCreateManyUserInputEnvelope)
    createMany?: ToReadLinkCreateManyUserInputEnvelope;

    @Field(() => [ToReadLinkWhereUniqueInput], {nullable:true})
    @Type(() => ToReadLinkWhereUniqueInput)
    set?: Array<ToReadLinkWhereUniqueInput>;

    @Field(() => [ToReadLinkWhereUniqueInput], {nullable:true})
    @Type(() => ToReadLinkWhereUniqueInput)
    disconnect?: Array<ToReadLinkWhereUniqueInput>;

    @Field(() => [ToReadLinkWhereUniqueInput], {nullable:true})
    @Type(() => ToReadLinkWhereUniqueInput)
    delete?: Array<ToReadLinkWhereUniqueInput>;

    @Field(() => [ToReadLinkWhereUniqueInput], {nullable:true})
    @Type(() => ToReadLinkWhereUniqueInput)
    connect?: Array<ToReadLinkWhereUniqueInput>;

    @Field(() => [ToReadLinkUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ToReadLinkUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ToReadLinkUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ToReadLinkUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ToReadLinkScalarWhereInput], {nullable:true})
    @Type(() => ToReadLinkScalarWhereInput)
    deleteMany?: Array<ToReadLinkScalarWhereInput>;
}
