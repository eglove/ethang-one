import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPersonInput } from './user-create-without-person.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPersonInput } from './user-create-or-connect-without-person.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPersonInput {

    @Field(() => UserCreateWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateWithoutPersonInput)
    create?: UserCreateWithoutPersonInput;

    @Field(() => UserCreateOrConnectWithoutPersonInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPersonInput)
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
