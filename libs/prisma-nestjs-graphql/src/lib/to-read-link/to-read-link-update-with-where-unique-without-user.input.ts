import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkWhereUniqueInput } from './to-read-link-where-unique.input';
import { Type } from 'class-transformer';
import { ToReadLinkUpdateWithoutUserInput } from './to-read-link-update-without-user.input';

@InputType()
export class ToReadLinkUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ToReadLinkWhereUniqueInput, {nullable:false})
    @Type(() => ToReadLinkWhereUniqueInput)
    where!: ToReadLinkWhereUniqueInput;

    @Field(() => ToReadLinkUpdateWithoutUserInput, {nullable:false})
    @Type(() => ToReadLinkUpdateWithoutUserInput)
    data!: ToReadLinkUpdateWithoutUserInput;
}
