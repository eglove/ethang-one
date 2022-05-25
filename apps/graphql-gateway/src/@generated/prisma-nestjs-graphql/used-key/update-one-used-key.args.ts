import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyUpdateInput } from './used-key-update.input';
import { Type } from 'class-transformer';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';

@ArgsType()
export class UpdateOneUsedKeyArgs {

    @Field(() => UsedKeyUpdateInput, {nullable:false})
    @Type(() => UsedKeyUpdateInput)
    data!: UsedKeyUpdateInput;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UsedKeyWhereUniqueInput)
    where!: UsedKeyWhereUniqueInput;
}
