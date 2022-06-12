import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieCreateInput } from './calorie-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCalorieArgs {

    @Field(() => CalorieCreateInput, {nullable:false})
    @Type(() => CalorieCreateInput)
    data!: CalorieCreateInput;
}
