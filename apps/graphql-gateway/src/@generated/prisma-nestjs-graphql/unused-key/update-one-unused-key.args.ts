import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyUpdateInput } from './unused-key-update.input';
import { Type } from 'class-transformer';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';

@ArgsType()
export class UpdateOneUnusedKeyArgs {

    @Field(() => UnusedKeyUpdateInput, {nullable:false})
    @Type(() => UnusedKeyUpdateInput)
    data!: UnusedKeyUpdateInput;

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UnusedKeyWhereUniqueInput)
    where!: UnusedKeyWhereUniqueInput;
}
