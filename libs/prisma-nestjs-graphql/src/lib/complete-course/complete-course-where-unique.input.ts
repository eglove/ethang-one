import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CompleteCourseTitleUserIdCompoundUniqueInput } from './complete-course-title-user-id-compound-unique.input';

@InputType()
export class CompleteCourseWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => CompleteCourseTitleUserIdCompoundUniqueInput, {nullable:true})
    title_userId?: CompleteCourseTitleUserIdCompoundUniqueInput;
}
