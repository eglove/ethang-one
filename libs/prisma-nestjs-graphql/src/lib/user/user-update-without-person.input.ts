import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ToReadLinkUpdateManyWithoutUserInput } from '../to-read-link/to-read-link-update-many-without-user.input';
import { CompleteCourseUpdateManyWithoutUserInput } from '../complete-course/complete-course-update-many-without-user.input';

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

    @Field(() => ToReadLinkUpdateManyWithoutUserInput, {nullable:true})
    toReadLinks?: ToReadLinkUpdateManyWithoutUserInput;

    @Field(() => CompleteCourseUpdateManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseUpdateManyWithoutUserInput;
}
