import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesUpdateManyMutationInput } from './todays-calories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';

@ArgsType()
export class UpdateManyTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesUpdateManyMutationInput, {nullable:false})
    @Type(() => TodaysCaloriesUpdateManyMutationInput)
    data!: TodaysCaloriesUpdateManyMutationInput;

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    @Type(() => TodaysCaloriesWhereInput)
    where?: TodaysCaloriesWhereInput;
}
