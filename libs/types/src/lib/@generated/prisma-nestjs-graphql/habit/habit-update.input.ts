import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class HabitUpdateInput {
  @Field(
    () => {
      return StringFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  name?: StringFieldUpdateOperationsInput;

  @Field(
    () => {
      return StringFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  recurInterval?: StringFieldUpdateOperationsInput;

  @Field(
    () => {
      return DateTimeFieldUpdateOperationsInput;
    },
    { nullable: true }
  )
  dueDate?: DateTimeFieldUpdateOperationsInput;
}
