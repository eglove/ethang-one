import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutToReadLinksInput } from './user-create-without-to-read-links.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutToReadLinksInput } from './user-create-or-connect-without-to-read-links.input';
import { UserUpsertWithoutToReadLinksInput } from './user-upsert-without-to-read-links.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutToReadLinksInput } from './user-update-without-to-read-links.input';

@InputType()
export class UserUpdateOneRequiredWithoutToReadLinksNestedInput {

    @Field(() => UserCreateWithoutToReadLinksInput, {nullable:true})
    @Type(() => UserCreateWithoutToReadLinksInput)
    create?: UserCreateWithoutToReadLinksInput;

    @Field(() => UserCreateOrConnectWithoutToReadLinksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutToReadLinksInput)
    connectOrCreate?: UserCreateOrConnectWithoutToReadLinksInput;

    @Field(() => UserUpsertWithoutToReadLinksInput, {nullable:true})
    @Type(() => UserUpsertWithoutToReadLinksInput)
    upsert?: UserUpsertWithoutToReadLinksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutToReadLinksInput, {nullable:true})
    @Type(() => UserUpdateWithoutToReadLinksInput)
    update?: UserUpdateWithoutToReadLinksInput;
}
