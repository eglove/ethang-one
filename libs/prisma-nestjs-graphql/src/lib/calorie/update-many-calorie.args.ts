import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieUpdateManyMutationInput } from './calorie-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CalorieWhereInput } from './calorie-where.input';

@ArgsType()
export class UpdateManyCalorieArgs {

    @Field(() => CalorieUpdateManyMutationInput, {nullable:false})
    @Type(() => CalorieUpdateManyMutationInput)
    data!: CalorieUpdateManyMutationInput;

    @Field(() => CalorieWhereInput, {nullable:true})
    @Type(() => CalorieWhereInput)
    where?: CalorieWhereInput;
}
