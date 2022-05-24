import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TodaysCaloriesUpdateManyMutationInput } from './todays-calories-update-many-mutation.input';
import { TodaysCaloriesWhereInput } from './todays-calories-where.input';

@ArgsType()
export class UpdateManyTodaysCaloriesArgs {

    @Field(() => TodaysCaloriesUpdateManyMutationInput, {nullable:false})
    data!: TodaysCaloriesUpdateManyMutationInput;

    @Field(() => TodaysCaloriesWhereInput, {nullable:true})
    where?: TodaysCaloriesWhereInput;
}
