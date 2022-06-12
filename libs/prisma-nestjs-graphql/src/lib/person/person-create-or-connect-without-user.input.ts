import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutUserInput } from './person-create-without-user.input';

@InputType()
export class PersonCreateOrConnectWithoutUserInput {

    @Field(() => PersonWhereUniqueInput, {nullable:false})
    @Type(() => PersonWhereUniqueInput)
    where!: PersonWhereUniqueInput;

    @Field(() => PersonCreateWithoutUserInput, {nullable:false})
    @Type(() => PersonCreateWithoutUserInput)
    create!: PersonCreateWithoutUserInput;
}
