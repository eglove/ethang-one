import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieCreateWithoutPersonInput } from './calorie-create-without-person.input';
import { Type } from 'class-transformer';
import { CalorieCreateOrConnectWithoutPersonInput } from './calorie-create-or-connect-without-person.input';
import { CalorieUpsertWithoutPersonInput } from './calorie-upsert-without-person.input';
import { CalorieWhereUniqueInput } from './calorie-where-unique.input';
import { CalorieUpdateWithoutPersonInput } from './calorie-update-without-person.input';

@InputType()
export class CalorieUpdateOneWithoutPersonInput {

    @Field(() => CalorieCreateWithoutPersonInput, {nullable:true})
    @Type(() => CalorieCreateWithoutPersonInput)
    create?: CalorieCreateWithoutPersonInput;

    @Field(() => CalorieCreateOrConnectWithoutPersonInput, {nullable:true})
    @Type(() => CalorieCreateOrConnectWithoutPersonInput)
    connectOrCreate?: CalorieCreateOrConnectWithoutPersonInput;

    @Field(() => CalorieUpsertWithoutPersonInput, {nullable:true})
    @Type(() => CalorieUpsertWithoutPersonInput)
    upsert?: CalorieUpsertWithoutPersonInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CalorieWhereUniqueInput, {nullable:true})
    @Type(() => CalorieWhereUniqueInput)
    connect?: CalorieWhereUniqueInput;

    @Field(() => CalorieUpdateWithoutPersonInput, {nullable:true})
    @Type(() => CalorieUpdateWithoutPersonInput)
    update?: CalorieUpdateWithoutPersonInput;
}
