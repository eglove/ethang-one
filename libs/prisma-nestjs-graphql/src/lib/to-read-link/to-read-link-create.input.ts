import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutToReadLinksInput } from '../user/user-create-nested-one-without-to-read-links.input';

@InputType()
export class ToReadLinkCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => UserCreateNestedOneWithoutToReadLinksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutToReadLinksInput;
}
