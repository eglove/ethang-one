import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPersonInput } from './user-create-without-person.input';

@InputType()
export class UserCreateOrConnectWithoutPersonInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPersonInput, {nullable:false})
    @Type(() => UserCreateWithoutPersonInput)
    create!: UserCreateWithoutPersonInput;
}
