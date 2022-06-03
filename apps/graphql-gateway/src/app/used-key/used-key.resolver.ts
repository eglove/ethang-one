import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UnusedKey } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/unused-key/unused-key.model';
import { DeleteOneUsedKeyArgs as DeleteOneUsedKeyArguments } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/used-key/delete-one-used-key.args';
import { UsedKey } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/used-key/used-key.model';
import { UnusedKeyService } from '../unused-key/unused-key.service';
import { UsedKeyService } from './used-key.service';

@Resolver(() => {
  return UsedKey;
})
export class UsedKeyResolver {
  constructor(
    private readonly unusedKeyService: UnusedKeyService,
    private readonly usedKeyService: UsedKeyService
  ) {}

  @Mutation(() => {
    return UnusedKey;
  })
  async deleteUsedKey(
    @Args() data: DeleteOneUsedKeyArguments
  ): Promise<UnusedKey> {
    const deletedKey = await this.usedKeyService.delete(data);

    this.unusedKeyService
      .create({
        data: {
          key: deletedKey.key,
        },
      })
      .catch((error: Error) => {
        console.error(
          'Failed to create unused key after deleting used key.',
          error
        );
      });

    return deletedKey;
  }
}
