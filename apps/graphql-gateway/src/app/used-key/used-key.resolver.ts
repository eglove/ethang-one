import {
  DeleteOneUsedKeyArgs as DeleteOneUsedKeyArguments,
  UnusedKey,
  UsedKey,
} from '@ethang/prisma-nestjs-graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

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
