import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PersonUpdateOneWithoutUserInput } from '../person/person-update-one-without-user.input';
import { CompleteCourseUpdateManyWithoutUserInput } from '../complete-course/complete-course-update-many-without-user.input';

@InputType()
export class UserUpdateInput {

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

    @Field(() => PersonUpdateOneWithoutUserInput, {nullable:true})
    Person?: PersonUpdateOneWithoutUserInput;

    @Field(() => CompleteCourseUpdateManyWithoutUserInput, {nullable:true})
    CompleteCourse?: CompleteCourseUpdateManyWithoutUserInput;
}
