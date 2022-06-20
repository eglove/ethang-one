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
import { UnusedKeyModule } from './unused-key/unused-key.module';
import { UsedKeyModule } from './used-key/used-key.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import {
  GraphQLContext,
  isSignInQuery,
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
        let userSession;
        if (
          context.req.body.operationName !== 'IntrospectionQuery' &&
          !isSignInQuery(context.req.body.query)
        ) {
          userSession = validateGraphQlUserToken(context);
        }

        return { ...context, userSession };
      },
      cors: {
        origin: '*',
      },
      driver: ApolloDriver,
      introspection: process.env.NODE_ENV === 'development',
    }),
    HabitModule,
    UsedKeyModule,
    UnusedKeyModule,
    FinanceRecordModule,
    UserModule,
    PersonModule,
    CalorieRecordModule,
  ],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
