import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Report } from './reports/report.entity';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot({
      database: 'apps/car-value/db.sqlite',
      entities: [Report, User],
      synchronize: true,
      type: 'sqlite',
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
