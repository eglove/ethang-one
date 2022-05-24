import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsedKeyWhereUniqueInput } from './used-key-where-unique.input';

@ArgsType()
export class FindUniqueUsedKeyArgs {

    @Field(() => UsedKeyWhereUniqueInput, {nullable:false})
    where!: UsedKeyWhereUniqueInput;
}
