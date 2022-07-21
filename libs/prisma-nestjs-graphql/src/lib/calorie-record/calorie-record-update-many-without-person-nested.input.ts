import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordCreateWithoutPersonInput } from './calorie-record-create-without-person.input';
import { Type } from 'class-transformer';
import { CalorieRecordCreateOrConnectWithoutPersonInput } from './calorie-record-create-or-connect-without-person.input';
import { CalorieRecordUpsertWithWhereUniqueWithoutPersonInput } from './calorie-record-upsert-with-where-unique-without-person.input';
import { CalorieRecordCreateManyPersonInputEnvelope } from './calorie-record-create-many-person-input-envelope.input';
import { CalorieRecordWhereUniqueInput } from './calorie-record-where-unique.input';
import { CalorieRecordUpdateWithWhereUniqueWithoutPersonInput } from './calorie-record-update-with-where-unique-without-person.input';
import { CalorieRecordUpdateManyWithWhereWithoutPersonInput } from './calorie-record-update-many-with-where-without-person.input';
import { CalorieRecordScalarWhereInput } from './calorie-record-scalar-where.input';

@InputType()
export class CalorieRecordUpdateManyWithoutPersonNestedInput {

    @Field(() => [CalorieRecordCreateWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordCreateWithoutPersonInput)
    create?: Array<CalorieRecordCreateWithoutPersonInput>;

    @Field(() => [CalorieRecordCreateOrConnectWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordCreateOrConnectWithoutPersonInput)
    connectOrCreate?: Array<CalorieRecordCreateOrConnectWithoutPersonInput>;

    @Field(() => [CalorieRecordUpsertWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordUpsertWithWhereUniqueWithoutPersonInput)
    upsert?: Array<CalorieRecordUpsertWithWhereUniqueWithoutPersonInput>;

    @Field(() => CalorieRecordCreateManyPersonInputEnvelope, {nullable:true})
    @Type(() => CalorieRecordCreateManyPersonInputEnvelope)
    createMany?: CalorieRecordCreateManyPersonInputEnvelope;

    @Field(() => [CalorieRecordWhereUniqueInput], {nullable:true})
    @Type(() => CalorieRecordWhereUniqueInput)
    set?: Array<CalorieRecordWhereUniqueInput>;

    @Field(() => [CalorieRecordWhereUniqueInput], {nullable:true})
    @Type(() => CalorieRecordWhereUniqueInput)
    disconnect?: Array<CalorieRecordWhereUniqueInput>;

    @Field(() => [CalorieRecordWhereUniqueInput], {nullable:true})
    @Type(() => CalorieRecordWhereUniqueInput)
    delete?: Array<CalorieRecordWhereUniqueInput>;

    @Field(() => [CalorieRecordWhereUniqueInput], {nullable:true})
    @Type(() => CalorieRecordWhereUniqueInput)
    connect?: Array<CalorieRecordWhereUniqueInput>;

    @Field(() => [CalorieRecordUpdateWithWhereUniqueWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordUpdateWithWhereUniqueWithoutPersonInput)
    update?: Array<CalorieRecordUpdateWithWhereUniqueWithoutPersonInput>;

    @Field(() => [CalorieRecordUpdateManyWithWhereWithoutPersonInput], {nullable:true})
    @Type(() => CalorieRecordUpdateManyWithWhereWithoutPersonInput)
    updateMany?: Array<CalorieRecordUpdateManyWithWhereWithoutPersonInput>;

    @Field(() => [CalorieRecordScalarWhereInput], {nullable:true})
    @Type(() => CalorieRecordScalarWhereInput)
    deleteMany?: Array<CalorieRecordScalarWhereInput>;
}
