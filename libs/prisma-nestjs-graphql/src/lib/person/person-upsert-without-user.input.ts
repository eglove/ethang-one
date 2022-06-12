import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonUpdateWithoutUserInput } from './person-update-without-user.input';
import { Type } from 'class-transformer';
import { PersonCreateWithoutUserInput } from './person-create-without-user.input';

@InputType()
export class PersonUpsertWithoutUserInput {

    @Field(() => PersonUpdateWithoutUserInput, {nullable:false})
    @Type(() => PersonUpdateWithoutUserInput)
    update!: PersonUpdateWithoutUserInput;

    @Field(() => PersonCreateWithoutUserInput, {nullable:false})
    @Type(() => PersonCreateWithoutUserInput)
    create!: PersonCreateWithoutUserInput;
}
