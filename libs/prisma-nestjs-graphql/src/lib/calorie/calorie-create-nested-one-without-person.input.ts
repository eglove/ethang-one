import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieCreateWithoutPersonInput } from './calorie-create-without-person.input';
import { Type } from 'class-transformer';
import { CalorieCreateOrConnectWithoutPersonInput } from './calorie-create-or-connect-without-person.input';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';

@InputType()
export class CalorieCreateNestedOneWithoutPersonInput {

    @Field(() => CalorieCreateWithoutPersonInput, {nullable:true})
    @Type(() => CalorieCreateWithoutPersonInput)
    create?: CalorieCreateWithoutPersonInput;

    @Field(() => CalorieCreateOrConnectWithoutPersonInput, {nullable:true})
    @Type(() => CalorieCreateOrConnectWithoutPersonInput)
    connectOrCreate?: CalorieCreateOrConnectWithoutPersonInput;

    @Field(() => CalorieWhereUniqueInput, {nullable:true})
    @Type(() => CalorieWhereUniqueInput)
    connect?: CalorieWhereUniqueInput;
}
