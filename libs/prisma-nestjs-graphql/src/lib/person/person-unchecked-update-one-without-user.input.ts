import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutUserInput } from './person-create-without-user.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutUserInput } from './person-create-or-connect-without-user.input';
import { PersonUpsertWithoutUserInput } from './person-upsert-without-user.input';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateWithoutUserInput } from './person-update-without-user.input';

@InputType()
export class PersonUncheckedUpdateOneWithoutUserInput {

    @Field(() => PersonCreateWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateWithoutUserInput)
    create?: PersonCreateWithoutUserInput;

    @Field(() => PersonCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutUserInput)
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput;

    @Field(() => PersonUpsertWithoutUserInput, {nullable:true})
    @Type(() => PersonUpsertWithoutUserInput)
    upsert?: PersonUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: PersonWhereUniqueInput;

    @Field(() => PersonUpdateWithoutUserInput, {nullable:true})
    @Type(() => PersonUpdateWithoutUserInput)
    update?: PersonUpdateWithoutUserInput;
}
