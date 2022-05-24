import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HabitModule } from './habit/habit.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  controllers: [AppController],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(
        process.cwd(),
        'apps/graphql-gateway/src/schema.gql'
      ),
      driver: ApolloDriver,
    }),
    HabitModule,
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
