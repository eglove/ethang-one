import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Report } from '../reports/report.entity';
import { ReportsModule } from '../reports/reports.module';
import { User } from '../users/user.entity';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot({
      database: 'db.sqlite',
      entities: [User, Report],
      synchronize: true,
      type: 'sqlite',
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
