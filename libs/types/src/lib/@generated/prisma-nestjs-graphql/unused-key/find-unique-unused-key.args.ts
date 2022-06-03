import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUnusedKeyArgs {

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:false})
    @Type(() => UnusedKeyWhereUniqueInput)
    where!: UnusedKeyWhereUniqueInput;
}
