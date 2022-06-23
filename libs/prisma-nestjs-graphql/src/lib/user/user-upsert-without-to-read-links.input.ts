import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutToReadLinksInput } from './user-update-without-to-read-links.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutToReadLinksInput } from './user-create-without-to-read-links.input';

@InputType()
export class UserUpsertWithoutToReadLinksInput {

    @Field(() => UserUpdateWithoutToReadLinksInput, {nullable:false})
    @Type(() => UserUpdateWithoutToReadLinksInput)
    update!: UserUpdateWithoutToReadLinksInput;

    @Field(() => UserCreateWithoutToReadLinksInput, {nullable:false})
    @Type(() => UserCreateWithoutToReadLinksInput)
    create!: UserCreateWithoutToReadLinksInput;
}
