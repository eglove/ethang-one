import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkCreateWithoutUserInput } from './to-read-link-create-without-user.input';
import { Type } from 'class-transformer';
import { ToReadLinkCreateOrConnectWithoutUserInput } from './to-read-link-create-or-connect-without-user.input';
import { ToReadLinkCreateManyUserInputEnvelope } from './to-read-link-create-many-user-input-envelope.input';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';

@InputType()
export class ToReadLinkCreateNestedManyWithoutUserInput {

    @Field(() => [ToReadLinkCreateWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkCreateWithoutUserInput)
    create?: Array<ToReadLinkCreateWithoutUserInput>;

    @Field(() => [ToReadLinkCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ToReadLinkCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ToReadLinkCreateOrConnectWithoutUserInput>;

    @Field(() => ToReadLinkCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ToReadLinkCreateManyUserInputEnvelope)
    createMany?: ToReadLinkCreateManyUserInputEnvelope;

    @Field(() => [ToReadLinkWhereUniqueInput], {nullable:true})
    @Type(() => ToReadLinkWhereUniqueInput)
    connect?: Array<ToReadLinkWhereUniqueInput>;
}
