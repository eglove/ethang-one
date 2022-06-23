import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalorieRecordModule } from './calorie-record/calorie-record.module';
import { FinanceRecordModule } from './finance-record/finance-record.module';
import { HabitModule } from './habit/habit.module';
import { PersonModule } from './person/person.module';
import { PrismaService } from './prisma/prisma.service';
import { ToReadLinkModule } from './to-read-link/to-read-link.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import {
  GraphQLContext,
  validateGraphQlUserToken,
} from './util/validate-graphql-token';

@Module({
  controllers: [AppController],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(
        process.cwd(),
        'apps/graphql-gateway/src/schema.gql'
      ),
      context(context: GraphQLContext) {
        const userSession = validateGraphQlUserToken(context);

        return { ...context, userSession };
      },
      cors: {
        origin: '*',
      },
      driver: ApolloDriver,
      introspection: process.env.NODE_ENV === 'development',
    }),
    HabitModule,
    FinanceRecordModule,
    UserModule,
    PersonModule,
    CalorieRecordModule,
    ToReadLinkModule,
  ],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
