import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CalorieCreateManyInput } from './calorie-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCalorieArgs {

    @Field(() => [CalorieCreateManyInput], {nullable:false})
    @Type(() => CalorieCreateManyInput)
    data!: Array<CalorieCreateManyInput>;
}
