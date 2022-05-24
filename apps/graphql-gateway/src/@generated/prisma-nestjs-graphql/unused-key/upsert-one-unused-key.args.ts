import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';
import { UnusedKeyCreateInput } from './unused-key-create.input';
import { UnusedKeyUpdateInput } from './unused-key-update.input';

@ArgsType()
export class UpsertOneUnusedKeyArgs {

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:false})
    where!: UnusedKeyWhereUniqueInput;

    @Field(() => UnusedKeyCreateInput, {nullable:false})
    create!: UnusedKeyCreateInput;

    @Field(() => UnusedKeyUpdateInput, {nullable:false})
    update!: UnusedKeyUpdateInput;
}
