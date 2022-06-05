import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { Type } from 'class-transformer';
import { UsedKeyCreateInput } from './used-key-create.input';
import { UsedKeyUpdateInput } from './used-key-update.input';

@ArgsType()
export class UpsertOneUsedKeyArgs {

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UsedKeyWhereUniqueInput)
    where!: UsedKeyWhereUniqueInput;

    @Field(() => UsedKeyCreateInput, {nullable:false})
    @Type(() => UsedKeyCreateInput)
    create!: UsedKeyCreateInput;

    @Field(() => UsedKeyUpdateInput, {nullable:false})
    @Type(() => UsedKeyUpdateInput)
    update!: UsedKeyUpdateInput;
}
