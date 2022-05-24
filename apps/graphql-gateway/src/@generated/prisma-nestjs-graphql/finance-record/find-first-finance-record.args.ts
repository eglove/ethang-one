import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FinanceRecordWhereInput } from './finance-record-where.input';
import { FinanceRecordOrderByWithRelationInput } from './finance-record-order-by-with-relation.input';
import { FinanceRecordWhereUniqueInput } from './finance-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FinanceRecordScalarFieldEnum } from './finance-record-scalar-field.enum';

@ArgsType()
export class FindFirstFinanceRecordArgs {

    @Field(() => FinanceRecordWhereInput, {nullable:true})
    where?: FinanceRecordWhereInput;

    @Field(() => [FinanceRecordOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FinanceRecordOrderByWithRelationInput>;

    @Field(() => FinanceRecordWhereUniqueInput, {nullable:true})
    cursor?: FinanceRecordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FinanceRecordScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FinanceRecordScalarFieldEnum>;
}
