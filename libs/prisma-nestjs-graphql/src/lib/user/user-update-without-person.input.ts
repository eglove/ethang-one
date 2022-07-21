import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ToReadLinkUpdateManyWithoutUserNestedInput } from '../to-read-link/to-read-link-update-many-without-user-nested.input';
import { CompleteCourseUpdateManyWithoutUserNestedInput } from '../complete-course/complete-course-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutPersonInput {

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

    @Field(() => ToReadLinkUpdateManyWithoutUserNestedInput, {nullable:true})
    toReadLinks?: ToReadLinkUpdateManyWithoutUserNestedInput;

    @Field(() => CompleteCourseUpdateManyWithoutUserNestedInput, {nullable:true})
    CompleteCourse?: CompleteCourseUpdateManyWithoutUserNestedInput;
}
