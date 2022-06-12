import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CalorieRecordScalarWhereInput } from './calorie-record-scalar-where.input';
import { Type } from 'class-transformer';
import { CalorieRecordUpdateManyMutationInput } from './calorie-record-update-many-mutation.input';

@InputType()
export class CalorieRecordUpdateManyWithWhereWithoutPersonInput {

    @Field(() => CalorieRecordScalarWhereInput, {nullable:false})
    @Type(() => CalorieRecordScalarWhereInput)
    where!: CalorieRecordScalarWhereInput;

    @Field(() => CalorieRecordUpdateManyMutationInput, {nullable:false})
    @Type(() => CalorieRecordUpdateManyMutationInput)
    data!: CalorieRecordUpdateManyMutationInput;
}
