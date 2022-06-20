import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Person } from '../person/person.model';
import { CompleteCourse } from '../complete-course/complete-course.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => Person, {nullable:true})
    Person?: Person | null;

    @Field(() => [CompleteCourse], {nullable:true})
    CompleteCourse?: Array<CompleteCourse>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
