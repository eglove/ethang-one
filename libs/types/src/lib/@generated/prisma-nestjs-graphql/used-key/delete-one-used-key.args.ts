import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUsedKeyArgs {

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UsedKeyWhereUniqueInput)
    where!: UsedKeyWhereUniqueInput;
}
