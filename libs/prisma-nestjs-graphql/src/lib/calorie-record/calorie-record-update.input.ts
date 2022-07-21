import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { PersonUpdateOneRequiredWithoutCalorieNestedInput } from '../person/person-update-one-required-without-calorie-nested.input';

@InputType()
export class CalorieRecordUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    calories?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    leftForToday?: NullableIntFieldUpdateOperationsInput;

    @Field(() => PersonUpdateOneRequiredWithoutCalorieNestedInput, {nullable:true})
    Person?: PersonUpdateOneRequiredWithoutCalorieNestedInput;
}
