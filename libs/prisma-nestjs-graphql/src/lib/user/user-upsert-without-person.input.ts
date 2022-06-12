import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPersonInput } from './user-update-without-person.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPersonInput } from './user-create-without-person.input';

@InputType()
export class UserUpsertWithoutPersonInput {

    @Field(() => UserUpdateWithoutPersonInput, {nullable:false})
    @Type(() => UserUpdateWithoutPersonInput)
    update!: UserUpdateWithoutPersonInput;

    @Field(() => UserCreateWithoutPersonInput, {nullable:false})
    @Type(() => UserCreateWithoutPersonInput)
    create!: UserCreateWithoutPersonInput;
}
