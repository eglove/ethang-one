import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "node:path";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FinanceRecordModule } from "./finance-record/finance-record.module";
import { HabitModule } from "./habit/habit.module";
import { PrismaService } from "./prisma/prisma.service";
import { TodaysCaloriesModule } from "./todays-calories/todays-calories.module";
import { UnusedKeyModule } from "./unused-key/unused-key.module";
import { UsedKeyModule } from "./used-key/used-key.module";
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";
import { PersonModule } from "./person/person.module";
import { CalorieModule } from "./calorie/calorie.module";

@Module({
  controllers: [AppController],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(
        process.cwd(),
        "apps/graphql-gateway/src/schema.gql"
      ),
      cors: {
        origin: "*",
      },
      driver: ApolloDriver,
    }),
    HabitModule,
    UsedKeyModule,
    UnusedKeyModule,
    FinanceRecordModule,
    TodaysCaloriesModule,
    UserModule,
    PersonModule,
    CalorieModule,
  ],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
