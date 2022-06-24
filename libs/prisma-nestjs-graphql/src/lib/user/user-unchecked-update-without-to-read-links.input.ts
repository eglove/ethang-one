import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PersonUncheckedUpdateOneWithoutUserInput } from '../person/person-unchecked-update-one-without-user.input';
import { CompleteCourseUncheckedUpdateManyWithoutUserInput } from '../complete-course/complete-course-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutToReadLinksInput {

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

    @Field(() => PersonUncheckedUpdateOneWithoutUserInput, {nullable:true})
    Person?: PersonUncheckedUpdateOneWithoutUserInput;

    @Field(() => CompleteCourseUncheckedUpdateManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseUncheckedUpdateManyWithoutUserInput;
}