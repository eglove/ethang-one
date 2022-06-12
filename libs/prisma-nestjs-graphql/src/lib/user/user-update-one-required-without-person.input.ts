import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPersonInput } from './user-create-without-person.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPersonInput } from './user-create-or-connect-without-person.input';
import { UserUpsertWithoutPersonInput } from './user-upsert-without-person.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutPersonInput } from './user-update-without-person.input';

@InputType()
export class UserUpdateOneRequiredWithoutPersonInput {

    @Field(() => UserCreateWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateWithoutPersonInput)
    create?: UserCreateWithoutPersonInput;

    @Field(() => UserCreateOrConnectWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPersonInput)
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput;

    @Field(() => UserUpsertWithoutPersonInput, {nullable:true})
    @Type(() => UserUpsertWithoutPersonInput)
    upsert?: UserUpsertWithoutPersonInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPersonInput, {nullable:true})
    @Type(() => UserUpdateWithoutPersonInput)
    update?: UserUpdateWithoutPersonInput;
}
