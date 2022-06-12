import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PersonCreateWithoutCalorieInput } from './person-create-without-calorie.input';
import { Type } from 'class-transformer';
import { PersonCreateOrConnectWithoutCalorieInput } from './person-create-or-connect-without-calorie.input';
import { PersonWhereUniqueInput } from './person-where-unique.input';

@InputType()
export class PersonCreateNestedOneWithoutCalorieInput {

    @Field(() => PersonCreateWithoutCalorieInput, {nullable:true})
    @Type(() => PersonCreateWithoutCalorieInput)
    create?: PersonCreateWithoutCalorieInput;

    @Field(() => PersonCreateOrConnectWithoutCalorieInput, {nullable:true})
    @Type(() => PersonCreateOrConnectWithoutCalorieInput)
    connectOrCreate?: PersonCreateOrConnectWithoutCalorieInput;

    @Field(() => PersonWhereUniqueInput, {nullable:true})
    @Type(() => PersonWhereUniqueInput)
    connect?: PersonWhereUniqueInput;
}
