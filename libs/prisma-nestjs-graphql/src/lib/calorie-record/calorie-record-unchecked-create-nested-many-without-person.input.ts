import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordCreateWithoutPersonInput } from './calorie-record-create-without-person.input';
import { Type } from 'class-transformer';
import { CalorieRecordCreateOrConnectWithoutPersonInput } from './calorie-record-create-or-connect-without-person.input';
import { CalorieRecordCreateManyPersonInputEnvelope } from './calorie-record-create-many-person-input-envelope.input';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';

@InputType()
export class CalorieRecordUncheckedCreateNestedManyWithoutPersonInput {

    @Field(() => [CalorieRecordCreateWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordCreateWithoutPersonInput)
    create?: Array<CalorieRecordCreateWithoutPersonInput>;

    @Field(() => [CalorieRecordCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<CalorieRecordCreateOrConnectWithoutPersonInput>;

    @Field(() => CalorieRecordCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => CalorieRecordCreateManyPersonInputEnvelope)
    createMany?: CalorieRecordCreateManyPersonInputEnvelope;

    @Field(() => [CalorieRecordWhereUniqueInput], {nullable:true})
    @Type(() => CalorieRecordWhereUniqueInput)
    connect?: Array<CalorieRecordWhereUniqueInput>;
}
