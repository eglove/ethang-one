import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';
import { Type } from 'class-transformer';
import { UnusedKeyCreateInput } from './unused-key-create.input';
import { UnusedKeyUpdateInput } from './unused-key-update.input';

@ArgsType()
export class UpsertOneUnusedKeyArgs {

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UnusedKeyWhereUniqueInput)
    where!: UnusedKeyWhereUniqueInput;

    @Field(() => UnusedKeyCreateInput, {nullable:false})
    @Type(() => UnusedKeyCreateInput)
    create!: UnusedKeyCreateInput;

    @Field(() => UnusedKeyUpdateInput, {nullable:false})
    @Type(() => UnusedKeyUpdateInput)
    update!: UnusedKeyUpdateInput;
}
