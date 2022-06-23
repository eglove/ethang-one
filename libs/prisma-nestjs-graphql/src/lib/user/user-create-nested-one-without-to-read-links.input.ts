import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToReadLinksInput } from './user-create-without-to-read-links.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutToReadLinksInput } from './user-create-or-connect-without-to-read-links.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutToReadLinksInput {

    @Field(() => UserCreateWithoutToReadLinksInput, {nullable:true})
    @Type(() => UserCreateWithoutToReadLinksInput)
    create?: UserCreateWithoutToReadLinksInput;

    @Field(() => UserCreateOrConnectWithoutToReadLinksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutToReadLinksInput)
    connectOrCreate?: UserCreateOrConnectWithoutToReadLinksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
