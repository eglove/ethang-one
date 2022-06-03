import { Query, Resolver } from '@nestjs/graphql';

import { UnusedKey } from '../../../../../libs/types/src/lib/@generated/prisma-nestjs-graphql/unused-key/unused-key.model';
import { UsedKeyService } from '../used-key/used-key.service';
import { UnusedKeyService } from './unused-key.service';

@Resolver()
export class UnusedKeyResolver {
  constructor(
    private readonly usedKeyService: UsedKeyService,
    private readonly unusedKeyService: UnusedKeyService
  ) {}

  @Query(
    () => {
      return UnusedKey;
    },
    { nullable: true }
  )
  async getUnusedKey(): Promise<UnusedKey | undefined> {
    const key = await this.unusedKeyService.getUniqueKey();

    if (typeof key !== 'undefined') {
      this.unusedKeyService
        .delete({
          where: { key: key.key },
        })
        .catch((error: Error) => {
          console.error('Failed to delete key after get.', error);
        });

      this.usedKeyService
        .create({
          data: {
            key: key.key,
          },
        })
        .catch((error: Error) => {
          console.error(
            'Failed to create unused key after used key get.',
            error
          );
        });
    }

    this.unusedKeyService.fillMinimumUnusedKeys().catch((error: Error) => {
      console.error('Failed to fill keys.', error);
    });

    return this.unusedKeyService.getUniqueKey();
  }
}
