import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class TodaysCaloriesUpdateInput {
  @Field(
    () => {
      return DateTimeFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  birthday?: DateTimeFieldUpdateOperationsInput;

  @Field(
    () => {
      return IntFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  currentCalories?: IntFieldUpdateOperationsInput;

  @Field(
    () => {
      return IntFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  height?: IntFieldUpdateOperationsInput;

  @Field(
    () => {
      return FloatFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  weight?: FloatFieldUpdateOperationsInput;
}
