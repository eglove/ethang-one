import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '../guards/auth.guard';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportDto } from './dtos/report.dto';
import { Report } from './report.entity';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Serialize(ReportDto)
  async createReport(
    @Body() body: CreateReportDto,
    @CurrentUser() user: User
  ): Promise<Report> {
    return this.reportsService.create(body, user);
  }

  @Patch('/:id')
  async approveReport(
    @Param('id') id: string,
    @Body() body: ApproveReportDto
  ): Promise<Report> {
    return this.reportsService.changeApproval(Number(id), body.approved);
  }
}
