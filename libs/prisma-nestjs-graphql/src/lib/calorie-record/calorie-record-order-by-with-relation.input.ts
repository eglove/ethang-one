import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PersonOrderByWithRelationInput } from '../person/person-order-by-with-relation.input';

@InputType()
export class CalorieRecordOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    calories?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    leftForToday?: keyof typeof SortOrder;

    @Field(() => PersonOrderByWithRelationInput, {nullable:true})
    Person?: PersonOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    personId?: keyof typeof SortOrder;
}
