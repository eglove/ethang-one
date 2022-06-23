import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutToReadLinksInput } from './user-create-without-to-read-links.input';

@InputType()
export class UserCreateOrConnectWithoutToReadLinksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutToReadLinksInput, {nullable:false})
    @Type(() => UserCreateWithoutToReadLinksInput)
    create!: UserCreateWithoutToReadLinksInput;
}
