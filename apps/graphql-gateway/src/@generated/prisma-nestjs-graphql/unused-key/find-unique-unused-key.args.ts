import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UnusedKeyWhereUniqueInput } from './unused-key-where-unique.input';

@ArgsType()
export class FindUniqueUnusedKeyArgs {

    @Field(() => UnusedKeyWhereUniqueInput, {nullable:false})
    where!: UnusedKeyWhereUniqueInput;
}
