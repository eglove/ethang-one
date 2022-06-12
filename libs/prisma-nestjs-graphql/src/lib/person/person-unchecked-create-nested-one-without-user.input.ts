import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutUserInput } from './person-create-without-user.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutUserInput } from './person-create-or-connect-without-user.input';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => PersonCreateWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateWithoutUserInput)
    create?: PersonCreateWithoutUserInput;

    @Field(() => PersonCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutUserInput)
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: PersonWhereUniqueInput;
}
