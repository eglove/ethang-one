import { registerEnumType } from '@nestjs/graphql';

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

registerEnumType(QueryMode, { description: undefined, name: 'QueryMode' });
