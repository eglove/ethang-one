import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPersonInput } from '../user/user-update-one-required-without-person.input';
import { CalorieUpdateOneWithoutPersonInput } from '../calorie/calorie-update-one-without-person.input';

@InputType()
export class PersonUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    birthday?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    weightLbs?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    heightIn?: FloatFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPersonInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutPersonInput;

    @Field(() => CalorieUpdateOneWithoutPersonInput, {nullable:true})
    Calorie?: CalorieUpdateOneWithoutPersonInput;
}
