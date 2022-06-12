import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutCalorieInput } from './person-create-without-calorie.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutCalorieInput } from './person-create-or-connect-without-calorie.input';
import { PersonUpsertWithoutCalorieInput } from './person-upsert-without-calorie.input';
import { PersonWhereUniqueInput } from './person-where-unique.input';
import { PersonUpdateWithoutCalorieInput } from './person-update-without-calorie.input';

@InputType()
export class PersonUpdateOneRequiredWithoutCalorieInput {

    @Field(() => PersonCreateWithoutCalorieInput, {nullable:true})
    @Type(() => PersonCreateWithoutCalorieInput)
    create?: PersonCreateWithoutCalorieInput;

    @Field(() => PersonCreateOrConnectWithoutCalorieInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutCalorieInput)
    connectOrCreate?: PersonCreateOrConnectWithoutCalorieInput;

    @Field(() => PersonUpsertWithoutCalorieInput, {nullable:true})
    @Type(() => PersonUpsertWithoutCalorieInput)
    upsert?: PersonUpsertWithoutCalorieInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: PersonWhereUniqueInput;

    @Field(() => PersonUpdateWithoutCalorieInput, {nullable:true})
    @Type(() => PersonUpdateWithoutCalorieInput)
    update?: PersonUpdateWithoutCalorieInput;
}
