import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieRecordUpdateManyMutationInput } from './calorie-record-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CalorieRecordWhereInput } from './calorie-record-where.input';

@ArgsType()
export class UpdateManyCalorieRecordArgs {

    @Field(() => CalorieRecordUpdateManyMutationInput, {nullable:false})
    @Type(() => CalorieRecordUpdateManyMutationInput)
    data!: CalorieRecordUpdateManyMutationInput;

    @Field(() => CalorieRecordWhereInput, {nullable:true})
    @Type(() => CalorieRecordWhereInput)
    where?: CalorieRecordWhereInput;
}
