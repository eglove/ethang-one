import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PersonUpdateOneRequiredWithoutCalorieInput } from '../person/person-update-one-required-without-calorie.input';

@InputType()
export class CalorieUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    currentCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    dailyCalories?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    deficit?: IntFieldUpdateOperationsInput;

    @Field(() => PersonUpdateOneRequiredWithoutCalorieInput, {nullable:true})
    Person?: PersonUpdateOneRequiredWithoutCalorieInput;
}
