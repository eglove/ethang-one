import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CalorieRecordCreateNestedManyWithoutPersonInput } from '../calorie-record/calorie-record-create-nested-many-without-person.input';

@InputType()
export class PersonCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    birthday!: Date | string;

    @Field(() => Float, {nullable:false})
    weightLbs!: number;

    @Field(() => Float, {nullable:false})
    heightIn!: number;

    @Field(() => CalorieRecordCreateNestedManyWithoutPersonInput, {nullable:true})
    Calorie?: CalorieRecordCreateNestedManyWithoutPersonInput;
}
