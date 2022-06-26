import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToReadLinkUrlUserIdCompoundUniqueInput } from './to-read-link-url-user-id-compound-unique.input';

@InputType()
export class ToReadLinkWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ToReadLinkUrlUserIdCompoundUniqueInput, {nullable:true})
    url_userId?: ToReadLinkUrlUserIdCompoundUniqueInput;
}
