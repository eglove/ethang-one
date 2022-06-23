import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Type } from 'class-transformer';
import { ToReadLinkUpdateWithoutUserInput } from './to-read-link-update-without-user.input';
import { ToReadLinkCreateWithoutUserInput } from './to-read-link-create-without-user.input';

@InputType()
export class ToReadLinkUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:false})
    @Type(() => ToReadLinkWhereUniqueInput)
    where!: ToReadLinkWhereUniqueInput;

    @Field(() => ToReadLinkUpdateWithoutUserInput, {nullable:false})
    @Type(() => ToReadLinkUpdateWithoutUserInput)
    update!: ToReadLinkUpdateWithoutUserInput;

    @Field(() => ToReadLinkCreateWithoutUserInput, {nullable:false})
    @Type(() => ToReadLinkCreateWithoutUserInput)
    create!: ToReadLinkCreateWithoutUserInput;
}
