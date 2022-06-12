import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class CalorieUpdateWithoutPersonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    currentCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    dailyCalories?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    deficit?: IntFieldUpdateOperationsInput;
}
