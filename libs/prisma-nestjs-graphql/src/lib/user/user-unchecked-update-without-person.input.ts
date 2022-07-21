import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ToReadLinkUncheckedUpdateManyWithoutUserNestedInput } from '../to-read-link/to-read-link-unchecked-update-many-without-user-nested.input';
import { CompleteCourseUncheckedUpdateManyWithoutUserNestedInput } from '../complete-course/complete-course-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPersonInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => ToReadLinkUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    toReadLinks?: ToReadLinkUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => CompleteCourseUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    CompleteCourse?: CompleteCourseUncheckedUpdateManyWithoutUserNestedInput;
}
