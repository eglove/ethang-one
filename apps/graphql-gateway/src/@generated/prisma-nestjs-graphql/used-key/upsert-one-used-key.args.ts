import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { UsedKeyCreateInput } from './used-key-create.input';
import { UsedKeyUpdateInput } from './used-key-update.input';

@ArgsType()
export class UpsertOneUsedKeyArgs {

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    where!: UsedKeyWhereUniqueInput;

    @Field(() => UsedKeyCreateInput, {nullable:false})
    create!: UsedKeyCreateInput;

    @Field(() => UsedKeyUpdateInput, {nullable:false})
    update!: UsedKeyUpdateInput;
}
