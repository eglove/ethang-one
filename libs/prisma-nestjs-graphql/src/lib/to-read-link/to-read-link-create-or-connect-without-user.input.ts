import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Type } from 'class-transformer';
import { ToReadLinkCreateWithoutUserInput } from './to-read-link-create-without-user.input';

@InputType()
export class ToReadLinkCreateOrConnectWithoutUserInput {

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:false})
    @Type(() => ToReadLinkWhereUniqueInput)
    where!: ToReadLinkWhereUniqueInput;

    @Field(() => ToReadLinkCreateWithoutUserInput, {nullable:false})
    @Type(() => ToReadLinkCreateWithoutUserInput)
    create!: ToReadLinkCreateWithoutUserInput;
}
