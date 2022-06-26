import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ToReadLinkUrlUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
