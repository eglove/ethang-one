import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';
import { Type } from 'class-transformer';
import { CalorieCreateWithoutPersonInput } from './calorie-create-without-person.input';

@InputType()
export class CalorieCreateOrConnectWithoutPersonInput {

    @Field(() => CalorieWhereUniqueInput, {nullable:false})
    @Type(() => CalorieWhereUniqueInput)
    where!: CalorieWhereUniqueInput;

    @Field(() => CalorieCreateWithoutPersonInput, {nullable:false})
    @Type(() => CalorieCreateWithoutPersonInput)
    create!: CalorieCreateWithoutPersonInput;
}
