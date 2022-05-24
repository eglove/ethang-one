import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyUpdateInput } from './used-key-update.input';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';

@ArgsType()
export class UpdateOneUsedKeyArgs {

    @Field(() => UsedKeyUpdateInput, {nullable:false})
    data!: UsedKeyUpdateInput;

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    where!: UsedKeyWhereUniqueInput;
}
